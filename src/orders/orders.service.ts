import { Injectable } from '@nestjs/common';
import { Address } from '../domain/address.model';
import { Customer } from '../domain/customer.model';
import { Order } from '../domain/order.model';

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
      [],
      'Plant001',
    ),
  ];

  constructor() {}

  getOrders(): Order[] {
    return this.orders;
  }

  getOrderById(id: number): Order {
    const order = this.orders.find((order: Order) => order.id === id);
    console.log(JSON.stringify(order));
    // TODO: Return 404 status code and proper error
    if (!order) {
      throw new Error(`Order not found with id: ${id}`);
    }
    return order;
  }

  getOrderByOrderNumber(orderNumber: string): Order {
    const order = this.orders.find(
      (order: Order) => order.orderNumber === orderNumber,
    );
    // TODO: Return 404 status code and proper error
    if (!order) {
      throw new Error(`Order not found with order number: ${orderNumber}`);
    }
    return order;
  }

  createOrder(order: Order) {
    try {
      this.validateOrder();
    } catch (e) {
      console.log('Invalid order');
    }
    const orderId = this.getNextOrderId();
    order.id = orderId;
    order.orderNumber = this.generateOrderNumber(orderId);
    this.orders.push(order);
    console.log(this.orders);
    return order;
  }

  private getNextOrderId(): number {
    const orderIds: number[] = this.orders.map((o: Order) => o.id);
    let maxId = Math.max(...orderIds);
    return (maxId += 1);
  }

  private generateOrderNumber(id: number): string {
    const prefix = 'Plant';
    return `${prefix}${id.toString().padStart(3, '0')}`;
  }

  private validateOrder(): boolean {
    throw new Error('test');
  }
}
