import { Component } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fetch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent {

  products!: Product[];

  constructor(private productService: ProductService){
    this.onFetch()
  }
  
  onFetch(){
    this.productService.fetchProduct().subscribe(
      (data) => { this.products = data;console.log('received from API the Product object ', data); },
      (error)=> { console.error(error);}
    )
  }
}
