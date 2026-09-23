import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../Services/utility-service';

@Component({
  selector: 'app-subject',
  imports: [],
  templateUrl: './subject.html',
  styleUrl: './subject.css',
})
export class Subject implements OnInit {
  constructor(private utilityService: UtilityService) {}
  ngOnInit(): void {
    this.utilityService.$selectedCurrency.subscribe((data) => {
      console.log(`i subcribed to ${data}`);
    });
  }
}
