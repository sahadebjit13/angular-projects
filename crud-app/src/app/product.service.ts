import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from './Product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  
  saveProduct(product: Product):Observable<Object>{
    let url = 'http://localhost:8090/product/api/create';
    return this.http.post(url,product);
  }

  fetchProduct():Observable<Array<Product>>{
    let url = 'http://localhost:8090/product/api/retrieve';
    return this.http.get<Array<Product>>(url)
  }

}
