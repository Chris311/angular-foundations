import { Component, signal, input } from '@angular/core';
import { IProduct } from '../product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'bot-cart-item',
  imports: [CurrencyPipe],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  product = input.required<IProduct>();
  availableInventory = signal(3);

  getImageUrl(product: IProduct) {
    return '/images/robot-parts/' + product.imageName;
  }

  removeFromCart() {
  }
}
