import { Component, OnInit } from '@angular/core';
import { DrinksService } from 'src/services/drinks.service';
import { MenuDrinks } from 'src/model/menu-drinks.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dataSource: MenuDrinks[] = [];
  dataView: MenuDrinks[] = [];
  dataFilter: MenuDrinks[] = [];
  selectedRow: MenuDrinks;
  pageSize: number = 10;
  pageIndex: number = 0;
  totalPage: number = 0;
  searchText: string = '';

  constructor(
    private drinksService: DrinksService
  ) { }

  ngOnInit() {
    this.getDrinksMenu();
    this.dataView[0].isSelect = true;
  }

  getDrinksMenu() {
    this.drinksService.getDBFromFireBase().subscribe(result => {
      if (result) {
        this.dataSource = result;
        this.bindModelToDataSource();
        this.calculateDataAndPaging();
      }
    })
  }

  bindModelToDataSource() {
    this.dataSource.forEach(item => {
      item.isSelect = false
    });

    this.dataSource[0].isSelect = true;
  }

  calculateDataAndPaging(onSearching: boolean = false) {
    const lenght = !onSearching? this.dataSource.length : this.dataFilter.length;
    this.totalPage = lenght % this.pageSize === 0 ? lenght/this.pageSize : Math.floor((lenght/this.pageSize) + 1);
    const start = this.pageIndex * this.pageSize;
    const end = ((this.pageIndex + 1) * this.pageSize);
    if (!onSearching) {
      this.dataView = this.dataSource.slice(start, end);
    } else {
      this.dataView = this.dataFilter.slice(start,end);
    }
    this.clearSelectedRow();
    this.selectedRow = this.dataView[0];
  }

  onSelectRow(event) {
    this.selectedRow = event;
    this.clearSelectedRow();
    const selectedIndex = this.dataView.findIndex(x => x.id === event.id);
    this.dataView[selectedIndex].isSelect = true;
  }

  clearSelectedRow() {
    this.dataView.forEach(item => {
      item.isSelect = false;
    })
  }

  onSelectPage(indexPage) {
    this.pageIndex = indexPage;
    if (this.searchText === '') {
      this.calculateDataAndPaging();
    } else {
      this.calculateDataAndPaging(true);
    }
    this.dataView[0].isSelect = true;
  }

  onTextChange(event) {
    this.searchText = event.target.value;
    if (this.searchText === '') {
      this.calculateDataAndPaging();
    } else {
      this.dataFilter = this.dataSource;
      this.dataFilter = this.dataFilter.filter(x => x.name.toLowerCase().includes(this.searchText.toLowerCase()));
      this.dataView = this.dataFilter;
      this.calculateDataAndPaging(true);
    }
  }
}
