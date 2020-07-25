import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {ProductService} from '../product.service';
import {ProductModel} from '../product-list/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  title: String = "Add Product"

  private productService;
  private router;
  public productItem = new ProductModel(null, null, null, null, null, null, null, null,null);

  constructor( productService: ProductService, router: Router) {
    this.productService = productService;
    this.router = router;
   }

  ngOnInit(): void {
  }

  addProduct(){
    this.productService.newProduct( this.productItem);
    console.log('Called');
    alert('Product added successfully');
    this.router.navigate(['/']);
  }

}
