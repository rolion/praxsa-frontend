import { Component, OnInit } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-feather-icons',
    templateUrl: './feather-icons.component.html',
    styleUrls: ['./feather-icons.component.sass'],
    standalone: true,
    imports: [RouterLink, FeatherModule],
})
export class FeatherIconsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
