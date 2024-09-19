import { Injectable } from '@angular/core';
import { Product } from './Product';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http:HttpClient){}

  saveProduct(product: Product){
    let url = 'http://localhost:8090/product/api/create'
    this.http.post(url,product)
  }
  
  products: Product[] = []
  // constructor() { 
  //   this.products=[
  //     {productId: "001",brand: "Apple",description: "iPhone 14 Pro",quantity: 20,price: 999.99},
  //     {productId: "002",brand: "Apple",description: "MacBook Air M2",quantity: 15,price: 1299.99},
  //     {productId: "003",brand: "Apple",description: "Apple Watch SE",quantity: 30,price: 249.99},
  //     {productId: "004",brand: "Samsung",description: "Galaxy S23 Ultra",quantity: 25,price: 1199.99},
  //     {productId: "005",brand: "Samsung",description: "QLED 4K TV",quantity: 10,price: 1499.99},
  //     {productId: "006",brand: "Samsung",description: "Galaxy Buds Pro",quantity: 40,price: 199.99},
  //     {productId: "007",brand: "Sony",description: "WH-1000XM5 Headphones",quantity: 35,price: 349.99},
  //     {productId: "008",brand: "Sony",description: "A7 IV Camera",quantity: 12,price: 2499.99},
  //     {productId: "009",brand: "Sony",description: "Bravia 4K TV",quantity: 20,price: 999.99},
  //     {productId: "010",brand: "Nike",description: "Air Max 270",quantity: 50,price: 159.99},
  //     {productId: "011",brand: "Nike",description: "React Infinity Run",quantity: 30,price: 169.99},
  //     {productId: "012",brand: "Nike",description: "Air Force 1",quantity: 45,price: 139.99}
  // ];
  // }

  getProducts(): Product[]{
    return this.products
  }

}
