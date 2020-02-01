import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuDrinks } from 'src/model/menu-drinks.model';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  @Input() dataSource: MenuDrinks[];
  @Output() selectedRow = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onSelect(item) {
    this.selectedRow.emit(item);
  }
}
