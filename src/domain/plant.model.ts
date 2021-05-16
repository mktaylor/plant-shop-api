export class Plant {
  constructor(
    id: number,
    displayName: string,
    scientificName: string,
    price: number,
    quantity: number,
    fact: string,
  ) {
    this.id = id;
    this.displayName = displayName;
    this.scientificName = scientificName;
    this.price = price;
    this.quantity = quantity;
    this.fact = fact;
  }

  id: number;
  displayName: string;
  scientificName: string;
  price: number;
  quantity: number;
  fact: string;

  reduceQuantity(amount: number) {
    this.quantity -= amount;
  }
}
