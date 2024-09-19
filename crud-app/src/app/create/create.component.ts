import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  product: Product = new Product('','','',0,0);

  constructor(private productService: ProductService){}
  onSubmit(){
    this.productService.fetchProduct().subscribe(
      (data) => { console.log('received from API the Product object ', data); },
      (error)=> { console.error(error);}
    )
  }
}
