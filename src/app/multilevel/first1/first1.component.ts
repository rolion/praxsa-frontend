import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-first1',
    templateUrl: './first1.component.html',
    styleUrls: ['./first1.component.sass'],
    standalone: true,
    imports: [RouterLink]
})
export class First1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
