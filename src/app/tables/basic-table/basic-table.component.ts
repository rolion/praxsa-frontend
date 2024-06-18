import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-basic-table',
    templateUrl: './basic-table.component.html',
    styleUrls: ['./basic-table.component.sass'],
    standalone: true,
    imports: [RouterLink]
})
export class BasicTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
