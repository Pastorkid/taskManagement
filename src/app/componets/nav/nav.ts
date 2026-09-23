import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UtilityService } from '../../Services/utility-service';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  constructor(private utilityService: UtilityService) {}

  myProductPath = 'products';

  handleSelectChange(event: any) {
    event.preventDefault();

    this.utilityService.$selectedCurrency.next(event.target.value);
    this.utilityService.$selectedBehaviouralSubject.next(event.target.value);
    this.utilityService.$selectedCurrency.subscribe({
      next: (data) => {
        console.log(`i cant remeber the value ${data} `);
      },
    });
    this.utilityService.$selectedBehaviouralSubject.subscribe({
      next: (data) => {
        console.log(`i cant remeber the behavioural value ${data} `);
      },
    });
    // this.utilityService.$selectedCurrencyBehavouralSubject.next(event.target.value);
  }
}
