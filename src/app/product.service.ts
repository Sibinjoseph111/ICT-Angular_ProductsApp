import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http: HttpClient ) {}

  getProducts(){
  
    var productList = this.http.get("http://localhost:3000/products");
    return productList;
  }

  newProduct(item){
    var product = this.http.post('http://localhost:3000/products/insert',{"product": item}).subscribe(data => console.log(data));

    return product;
  }

  deleteProduct(id){
    return this.http.post('http://localhost:3000/products/delete',{"id":id})
  }

  updateProduct(product){
    return this.http.post('http://localhost:3000/products/edit',{"product": product})
  }
}
