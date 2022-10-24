import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { products } from '../products';
import { IProducts } from '../IProducts';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  products:IProducts[] = products;


  constructor(  private route: ActivatedRoute,
    private cartService: CartService) {
    
   }

  addToCart(product: IProducts) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

  ngOnInit(): void {


  }

}
