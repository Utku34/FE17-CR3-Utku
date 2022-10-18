import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [

  

  

  {
    path:"about", component: AboutUsComponent

  },
  {
    path:"",component: HomeComponent
  },{
    path:"cart", component: CartComponent

  },{

    path: 'products/:productId', component:
     ProductDetailsComponent }

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
