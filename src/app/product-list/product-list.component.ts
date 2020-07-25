import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import {ProductModel} from './product.model';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  title : String = 'Product List'

  products: ProductModel[]; 

  imageWidth: number = 50;
  imageMargin: number = 2;

  showImage: boolean = false;
  editProductData: boolean = false;

  productIndex: number;


  private productService;
  public router;

  constructor(productService: ProductService, router: Router) {
    this.productService = productService;
    this.router = router;
  }

  toggleImage(){
    this.showImage = !this.showImage;
  }

  deleteProduct(id){
    this.productService.deleteProduct(id).subscribe(()=>{
      this.productService.getProducts().subscribe((products)=>{
        this.products = JSON.parse(JSON.stringify(products));
      })
    })
  }

  editProduct(product,i){

    this.editProductData  = true;
    this.productIndex = i;
   
  }

  updateProduct(product){

    this.editProductData  = false;
    this.productIndex = null;

    this.productService.updateProduct(product).subscribe((data)=>{
      console.log(data);
      this.getProducts();
    });
  }

  ngOnInit(): void {

   this.getProducts();

  }

  getProducts(){
    this.productService.getProducts().subscribe((products)=>{
      this.products = JSON.parse(JSON.stringify(products));
    });
  }

}
