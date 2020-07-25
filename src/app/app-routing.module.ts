import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AuthenticationComponent } from './authentication/authentication.component';


const routes: Routes = [
  {path:'', component: ProductListComponent},
  {path:'add', component: AddProductComponent},
  {path:'edit', component: EditProductComponent},
  {path:'signup', component: AuthenticationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
