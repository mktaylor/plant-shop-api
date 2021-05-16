export class OrderItem {
  constructor(plantId: number, quantity: number) {
    this.plantId = plantId;
    this.quantity = quantity;
  }

  plantId: number;
  quantity: number;
}
