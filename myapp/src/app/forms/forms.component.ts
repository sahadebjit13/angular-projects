import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../data/Product';
import { DataService } from '../data/data.service';


@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  productData: Product[]=[];
  filteredProductData: Product[]=[];
  product:Product = new Product("","","",0,0);
 
  constructor(private service:DataService){
    this.productData = service.getProducts();
    console.log(this.productData);
  }
 
  findProducts(input:string):void{
    this.filteredProductData = []
    for(let product of this.productData){
      if(product.brand.toLowerCase().includes(input.toLowerCase())){
        this.filteredProductData.push(product);
      }
    }
  }
 
  onSubmit(){
    this.productData.push(this.product)
  }
}
