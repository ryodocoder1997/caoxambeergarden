import { Component, OnInit } from '@angular/core';
import { DrinksService } from 'src/services/drinks.service';
import { MenuDrinks } from 'src/model/menu-drinks.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';

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
  innerWidth: number = 0;
  searchText: string = '';

  constructor(
    private drinksService: DrinksService,
    private db: AngularFirestore,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.getDrinksMenu();
  }

  getDrinksMenu() {
    this.drinksService.getDBFromFireBase().subscribe(actionArray => {
      this.dataSource = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as MenuDrinks;
      }).filter(x => x.id != 'B Model');
      this.buildDataSource();
    });
  }

  onChangeCategory(isRegularCategory: boolean) {
    if (isRegularCategory) {
      this.getDrinksMenu();
    } else {
      this.drinksService.getDBFromFireBase2().subscribe(result => {
        if (result) {
          this.dataSource = result;
          this.buildDataSource();

        }
      })
    }
  }

  buildDataSource() {
    this.pageIndex = 0;
    this.bindModelToDataSource();
    this.calculateDataAndPaging();
    this.dataSource[0].isSelect = true;
  }

  bindModelToDataSource() {
    this.dataSource.forEach(item => {
      item.isSelect = false
    });
    this.dataView = this.dataSource;
  }

  calculateDataAndPaging(onSearching: boolean = false) {
    const lenght = !onSearching ? this.dataSource.length : this.dataFilter.length;
    this.totalPage = lenght % this.pageSize === 0 ? lenght / this.pageSize : Math.floor((lenght / this.pageSize) + 1);
    const start = this.pageIndex * this.pageSize;
    const end = ((this.pageIndex + 1) * this.pageSize);
    if (!onSearching) {
      this.dataView = this.dataSource.slice(start, end);
    } else {
      this.dataView = this.dataFilter.slice(start, end);
    }
    this.clearSelectedRow();
    this.selectedRow = this.dataView[0];
  }

  onSelectRow(event, modal) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 768) {
      this.modalService.open(modal, { size: 'lg', centered: true });
    }
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
      this.dataView[0].isSelect = true;
    } else {
      this.dataFilter = this.dataSource;
      this.dataFilter = this.dataFilter.filter(x => x.NAME.toLowerCase().includes(this.searchText.toLowerCase()));
      this.dataView = this.dataFilter;
      this.calculateDataAndPaging(true);
      if (this.dataView.length > 0) {
        this.dataView[0].isSelect = true;
      }
    }
  }
}
