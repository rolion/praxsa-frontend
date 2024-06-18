import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.sass'],
    standalone: true,
    imports: [RouterLink],
})
export class BlogComponent {
  constructor() {
    //constructor
  }
}
