import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
interface FormatedPrice {
  formatedPrice: number;
  currency: string;
}
@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  $selectedCurrency: Subject<string> = new Subject<string>();
  $selectedBehaviouralSubject: BehaviorSubject<string> = new BehaviorSubject<string>('$');

  selectedCurrency = '$';

  constructor() {
    this.$selectedCurrency.subscribe({
      next: (data) => {
        console.log('Currency changed:', data);

        this.selectedCurrency = data;
      },
    });
  }

  resetPriceFormat(priceIndollar: number): FormatedPrice {
    let formatedPrice: FormatedPrice = {
      formatedPrice: priceIndollar,
      currency: '$',
    };

    if (this.selectedCurrency === '#') {
      const rateOfDollarToNaira = 1324.51;
      formatedPrice = {
        formatedPrice: priceIndollar * rateOfDollarToNaira,
        currency: this.selectedCurrency,
      };
    } else if (this.selectedCurrency === '€') {
      const rateOfDollarToEuro = 0.88;
      formatedPrice = {
        formatedPrice: priceIndollar * rateOfDollarToEuro,
        currency: this.selectedCurrency,
      };
    } else {
      formatedPrice.formatedPrice = priceIndollar;
    }

    return formatedPrice;
  }
}
