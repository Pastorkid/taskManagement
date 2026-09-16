import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (data) => {
        console.log(data.get('id'));
      },
      error(err) {
        console.log('I get error while retriving params');
      },
      complete: () => {
        console.log('I just finished getting the params');
      },
    });
  }
}
