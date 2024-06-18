import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-form-example',
    templateUrl: './form-example.component.html',
    styleUrls: ['./form-example.component.sass'],
    standalone: true,
    imports: [RouterLink, FormsModule]
})
export class FormExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
