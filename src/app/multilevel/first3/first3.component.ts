import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-first3',
    templateUrl: './first3.component.html',
    styleUrls: ['./first3.component.sass'],
    standalone: true,
    imports: [RouterLink]
})
export class First3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
