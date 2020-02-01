import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() totalPage: number;
  @Input() pageIndex: number;
  @Input() pageSize: number;

  @Output() onSelectPage = new EventEmitter<number>();

  pageNumbers:number[] = [];

  constructor() {}

  ngOnInit() {}

  onChangeSelectPage(index) {
    this.onSelectPage.emit(index);
  }
}
