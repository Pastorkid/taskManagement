import { Component, computed, effect, OnInit, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal implements OnInit {
  //efefct is used when we want to perform an action when the reactive state changes
  theme = signal<string>('light');
  constructor() {
    effect(() => {
      localStorage.setItem('theme', this.theme());
    });
  }
  // count: WritableSignal<number> = signal(0);
  count = signal<number>(0);
  //signal can conatained and store any data type

  // name = signal<string>('miracle');
  // isLoggedIn = signal<boolean>(false);
  setCount() {
    // this.count.set(100);
    //update is need wehn you want the vale to incraete dynamically liek a counter
    this.count.update((prev) => prev + 1);
  }
  decrementCount() {
    this.count.update((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });
  }
  reset() {
    this.count.set(0);
  }
  //computed signal allows us to read value from other signal as weell

  price = signal<number>(100);
  quantity = signal<number>(2);
  // we have created here two writable signal and now we wnat to calculate the total price
  totalPrice = computed(() => {
    // computed signal are lazy thewy will only work when we call them in our template
    // console.log('i am calcualting total price...');

    return this.price() * this.quantity();
  });
  resetPrice() {
    this.price.set(200);
    this.quantity.set(3);
    this.theme.set('dark');
    //a computed signal is a readonly if we try to rset the value of total price it will give an error
    // this.totalPrice.set(1000);
  }

  readOnlyCount = this.count.asReadonly();
  // i count modify a read only varibale
  ngOnInit(): void {
    //calling our signal like a function in order to read their value
    console.log(this.count());
  }
}
