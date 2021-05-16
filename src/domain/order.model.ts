import { Customer } from './customer.model';
import { Item } from './item.model';

export class Order {
  id: number;
  orderNumber?: string;
  customer: Customer;
  items: Item[];
}
