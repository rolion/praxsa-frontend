import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-contact-grid',
    templateUrl: './contact-grid.component.html',
    styleUrls: ['./contact-grid.component.sass'],
    standalone: true,
    imports: [RouterLink],
})
export class ContactGridComponent {
  constructor() {
    //constructor
  }
}
