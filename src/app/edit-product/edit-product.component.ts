import { Component, OnInit, Input } from '@angular/core';

import {ProductModel} from '../product-list/product.model';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  @Input() editProduct: ProductModel;

  constructor() { }

  ngOnInit(): void {
  }

}
