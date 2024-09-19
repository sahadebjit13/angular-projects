import { Component } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent {

  products!: Product[];

  constructor(private productService: ProductService){}
  onFetch(){
    this.productService.fetchProduct().subscribe(
      (data) => { this.products = data;console.log('received from API the Product object ', data); },
      (error)=> { console.error(error);}
    )
  }
}
