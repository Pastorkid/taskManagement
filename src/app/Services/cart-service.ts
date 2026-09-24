import { effect, Injectable, signal } from '@angular/core';
import { Product } from '../products/prouctInterface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {
    effect(() => {
      console.log(this.cart());
      console.log(this.totalPrice());
    });
  }
  cart = signal<Product[]>([]);
  totalPrice = signal<number>(0);
  addProduct(product: Product) {
    this.cart.update((prev) => {
      if (prev.some((item) => item.id === product.id)) {
        return [...prev];
      } else {
        return [...prev, product];
      }
    });
  }
  calculateTotalPrice() {
    this.totalPrice.set(
      this.cart().reduce((prev, current) => {
        return prev + Number(current.productPrice.replace('$', '')) * current.quantity;
      }, 0),
    );
  }
}
