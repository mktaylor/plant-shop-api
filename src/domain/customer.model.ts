import { Address } from './address.model';
import { Order } from './order.model';

export class Customer {
  constructor(
    name: string,
    address: Address,
    orders?: Order[]
  ) {
    this.name = name;
    this.address = address;
    this.orders = orders || [];
  }

  name: string;
  address: Address;
  orders?: Order[];
}
