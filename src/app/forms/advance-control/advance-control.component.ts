import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-advance-control',
    templateUrl: './advance-control.component.html',
    styleUrls: ['./advance-control.component.sass'],
    standalone: true,
    imports: [RouterLink, FormsModule]
})
export class AdvanceControlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
