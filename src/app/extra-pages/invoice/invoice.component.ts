import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-invoice',
    templateUrl: './invoice.component.html',
    styleUrls: ['./invoice.component.sass'],
    standalone: true,
    imports: [RouterLink]
})
export class InvoiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
