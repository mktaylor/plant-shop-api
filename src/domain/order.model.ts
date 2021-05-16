import { BaseResponse } from './base-response.model';
import { Customer } from './customer.model';
import { OrderItem } from './order-item.model';

export class Order extends BaseResponse {
  constructor(
    id: number,
    customer: Customer,
    items: OrderItem[],
    total?: number,
    orderNumber?: string,
  ) {
    super();
    this.id = id;
    this.orderNumber = orderNumber;
    this.customer = customer;
    this.items = items;
    this.total = total;
  }

  private id: number;
  orderNumber?: string;
  customer: Customer;
  items: OrderItem[];
  total: number;

  getOrderNumber(): string {
    return this.orderNumber || '';
  }

  getOrderId(): number {
    return this.id;
  }

  setOrderId(id: number): void {
    this.id = id;
  }
}
