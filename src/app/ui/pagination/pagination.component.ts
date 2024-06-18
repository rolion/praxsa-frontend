import { Component, OnInit } from '@angular/core';
import { NgbPagination, NgbPaginationPrevious, NgbPaginationNext, NgbPaginationNumber } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.sass'],
    standalone: true,
    imports: [
        RouterLink,
        NgbPagination,
        NgbPaginationPrevious,
        NgbPaginationNext,
        NgbPaginationNumber,
    ],
})
export class PaginationComponent implements OnInit {
  constructor() {}
  page = 4;
  page2 = 1;
  currentPage = 3;
  ngOnInit(): void {}

  getPageSymbol(current: number) {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G'][current - 1];
  }
}
