import { Component, Signal } from '@angular/core';
import { CartItemComponent } from "../cart-item/cart-item.component";
import { CartService } from '../cart.service';
import { IProduct } from '../product.model';


@Component({
  selector: 'bot-cart',
  imports: [CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: Signal<IProduct[]>;

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.cart;
  }

}
