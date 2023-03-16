import { ID } from "./ID";
interface IProduct {
  name: string;
  price: number;
  id: number;
}

class Product implements IProduct {
  name: string;
  price: number;
  id: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
    this.id = ID.getNewID();
  }
}

export default Product;
