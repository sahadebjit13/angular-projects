export class Product {
  public productId: undefined | string;
  brand: string;
  description: string;
  quantity: number;
  price: number;

  constructor(
    productId: string,
    brand: string,
    description: string,
    quantity: number,
    price: number
  ) {
    this.productId = productId;
    this.brand = brand;
    this.description = description;
    this.quantity = quantity;
    this.price = price;
  }
}
