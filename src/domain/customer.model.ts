import { Address } from './address.model';
import { Order } from './order.model';

export class Customer {
  constructor(id: number, name: string, address: Address) {
    this.id = id;
    this.name = name;
    this.address = address;
  }

  id: number;
  name: string;
  address: Address;
}
