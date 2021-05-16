import { Customer } from './customer.model';
import { Item } from './item.model';

export class Order {
  constructor(
    id: number,
    customer: Customer,
    items: Item[],
    orderNumber?: string,
  ) {
    this.id = id;
    this.orderNumber = orderNumber;
    this.customer = customer;
    this.items = items;
  }

  id: number;
  orderNumber?: string;
  customer: Customer;
  items: Item[];
}
