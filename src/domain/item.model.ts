export class Item {
  constructor(
    id: number,
    quantity: number,
    type: 'plant' | 'other'
  ) {
    this.id = id;
    this.quantity = quantity;
    this.type = type;
  }

  id: number;
  type?: 'plant' | 'other'; // how to make this flexible?
  quantity: number;
}
