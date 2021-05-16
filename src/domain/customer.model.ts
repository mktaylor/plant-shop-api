import { Address } from './address.model';
import { Order } from './order.model';

export class Customer {
  constructor(id: number, name: string, address: Address, orders?: Order[]) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.orders = orders || [];
  }

  id: number;
  name: string;
  address: Address;
  orders?: Order[];
}
