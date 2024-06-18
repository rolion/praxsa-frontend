import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-basic-form',
    templateUrl: './basic-form.component.html',
    styleUrls: ['./basic-form.component.sass'],
    standalone: true,
    imports: [RouterLink, FormsModule]
})
export class BasicFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
