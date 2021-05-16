import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PlantService } from '../inventory/plant.service';
import { Address } from '../domain/address.model';
import { Customer } from '../domain/customer.model';
import { Order } from '../domain/order.model';
import { InternalError } from '../domain/error.model';
import { Plant } from '../domain/plant.model';
import { OrderItem } from '../domain/order-item.model';

@Injectable()
export class OrdersService {
  orders: Order[] = [
    new Order(
      1,
      new Customer(
        1,
        'Ashley Smith',
        new Address(
          '123 Main Street',
          'Austin',
          'TX',
          '78704',
          'United States',
        ),
      ),
      [
        {
          plantId: 1,
          quantity: 2,
        },
      ],
      25.98,
      'Plant001',
    ),
  ];

  constructor(private readonly plantService: PlantService) {}

  getOrders(): Order[] {
    try {
      return this.orders;
    } catch(e) {
      console.log(e);
      throw new HttpException(
        'There was an error fetching orders',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  getOrderById(id: number): Order {
    try {
      const order = this.orders.find((order: Order) => order.getOrderId() === id);
      if (!order) {
        throw new HttpException(
          `Order not found with id: ${id}`,
          HttpStatus.NOT_FOUND,
        );
      }
      return order;
    } catch (e) {
      console.log(e);
      throw new HttpException(
        'There was an error fetching your order',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // These operations would typically be done asynchronously  
  createOrder(order: Order) {
    try {
      this.validateOrder(order);
      this.generateValidOrder(order);
      this.persistOrder(order);
      return order;
    } catch (e) {
      console.log(e);
      throw new HttpException(
        'There was an error processing your order',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  private validateOrder(order: Order): Order {
    const plantLookup: { [id: number]: Plant } = this.getPlantLookup();
    const errors: InternalError[] = [];
    const itemsInOrder = order.items;
    if (!itemsInOrder) {
      throw new HttpException(
        'Order must contain at least one item.',
        HttpStatus.BAD_REQUEST,
      );
    }

    itemsInOrder.forEach((item: OrderItem, i: number) => {
      const plant: Plant = plantLookup[item.plantId.toString()];
      item.plantName = plant.displayName;
      if (item.quantity > plant.quantity) {
        errors.push(
          new InternalError(
            'INSUFF_QUANTITY',
            `There is an insuffient quantity of ${plant.displayName} to complete this order.`,
          ),
        );
        // Remove the item from the order that cannot be fulfilled before calculating total
        itemsInOrder.splice(i, 1);
      } else {
        plant.reduceQuantity(item.quantity);
      }
    });

    if (!!errors && errors.length > 0) {
      order.setErrors(errors);
    }
    
    return order;
  }

  private persistOrder(order: Order): void {
    // Add Order to list (table in db)
    this.orders.push(order);
  }

  private generateValidOrder(order: Order): void {
    const orderId = this.getNextOrderId();
    order.setOrderId(orderId);
    order.orderNumber = this.generateOrderNumber(orderId);
    order.total = this.calculateTotal(order);
  }

  private getNextOrderId(): number {
    const orderIds: number[] = this.orders.map((o: Order) => o.getOrderId());
    let maxId = Math.max(...orderIds);
    return (maxId += 1);
  }

  private generateOrderNumber(id: number): string {
    const prefix = 'Plant';
    return `${prefix}${id.toString().padStart(3, '0')}`;
  }

  private calculateTotal(order: Order): number {
    let total = 0;
    if (!!order && !!order.items) {
      const plantLookup = this.getPlantLookup();
      order.items.forEach((item: OrderItem) => {
        const plant = plantLookup[item.plantId];
        total += plant.price * item.quantity;
      });
    }
    return total;
  }

  private getPlantLookup(): { [plantId: number]: Plant } {
    // This value could possibly be cached or this method could
    // be improved to not make a db call multiple times per order creation
    const plantInventory = this.plantService.getAllPlants();
    const plantLookup: { [id: number]: Plant } = {};
    plantInventory.forEach((plant: Plant) => {
      plantLookup[plant.id] = plant;
    });
    return plantLookup;
  }
}
