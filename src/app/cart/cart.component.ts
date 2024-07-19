import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor (private cartService: CartService) { }
  
  cartItems: number = 0;

  getCart():number {
    return this.cartService.get().length;
  }

  getCartItems() {
    return this.cartService.get();
  }
}
