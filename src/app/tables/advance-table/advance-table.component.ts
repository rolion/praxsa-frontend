import { Component, OnInit } from '@angular/core';
import { NgbProgressbar } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-advance-table',
    templateUrl: './advance-table.component.html',
    styleUrls: ['./advance-table.component.sass'],
    standalone: true,
    imports: [RouterLink, NgbProgressbar],
})
export class AdvanceTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
