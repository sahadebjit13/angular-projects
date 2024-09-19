import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { ColorComponent, JsonPipeComponent } from "./color/color.component";
import { DataComponent } from "./data/data.component";
import { FormsComponent } from "./forms/forms.component";

@Component({
  selector: 'my-box',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './my-box.component.html',
})
export class MyBoxComponent {
  productId = 'AZ1001'
  description = 'Canon 24 MegaPixel 256gb Memory'
  quantity = 10
  orderQuantity =  0
  available: boolean = this.orderQuantity <= this.quantity
  isQuantityAvailable = this.orderQuantity <= this.quantity
  newDate = Date.now()

  products = [
    {
      "productId": "P001",
      "name": "Smartphone",
      "category": "Electronics",
      "price": 699.99
    },
    {
      "productId": "P002",
      "name": "Laptop",
      "category": "Electronics",
      "price": 1199.99
    },
    {
      "productId": "P003",
      "name": "Bluetooth Headphones",
      "category": "Accessories",
      "price": 89.99
    },
    {
      "productId": "P004",
      "name": "Electric Toothbrush",
      "category": "Health",
      "price": 49.99
    },
    {
      "productId": "P005",
      "name": "Coffee Maker",
      "category": "Appliances",
      "price": 129.99
    }
  ]
  
  placeOrder():void{
    console.log(this.orderQuantity + ' Order Placed');
  }

}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    MyBoxComponent,
    ColorComponent,
    DataComponent,
    JsonPipeComponent,
    FormsComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Debjit'
}


