import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-first2',
    templateUrl: './first2.component.html',
    styleUrls: ['./first2.component.sass'],
    standalone: true,
    imports: [RouterLink]
})
export class First2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
