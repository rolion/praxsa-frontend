import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-pricing',
    templateUrl: './pricing.component.html',
    styleUrls: ['./pricing.component.sass'],
    standalone: true,
    imports: [RouterLink]
})
export class PricingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
