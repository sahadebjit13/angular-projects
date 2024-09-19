import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Product } from './Product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-data',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {

  productData: Product[] = []
  newProductData: Product[] = []
  brand = ''

  constructor(private service: DataService) {
    this.productData = service.getProducts()
    console.log(this.productData); 
  }
  
  newCountedProductData: {}[] = [{'brand': 'none', 'count': 0}]

  filteredData: SafeHtml = ``
  filteredProductData(brand: string): Product[] {
    this.newProductData = this.productData.filter(product => product.brand == brand)
    console.log(this.newProductData)
    return this.newProductData
    // this.newProductData = this.productData.filter(product => product.brand == brand)
    // console.log(this.newProductData)
    // this.newProductData.map(product => {
    //   this.filteredData = this.filteredData+`<tr><td>${product.productId}</td>
    //   <td>${product.brand}</td>
    //   <td>${product.description}</td>
    //   <td>${product.quantity}</td>
    //   <td>${product.price}</td></tr>`});
  }
  countedProductData(brand: string){
    console.log(this.newCountedProductData);
    
    return this.newCountedProductData
  }
  commonFunction(brand: string)
  {
    this.filteredProductData(brand)
    this.countedProductData(brand)
  }
}
