import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-read-mail',
    templateUrl: './read-mail.component.html',
    styleUrls: ['./read-mail.component.sass'],
    standalone: true,
    imports: [RouterLink]
})
export class ReadMailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
