export class OrderItem {
  constructor(plantId: number, quantity: number, plantName?: string) {
    this.plantId = plantId;
    this.plantName = plantName;
    this.quantity = quantity;
  }

  plantId: number;
  plantName?: string;
  quantity: number;
}
