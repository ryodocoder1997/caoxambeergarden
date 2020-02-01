import { Component, OnInit, Input } from '@angular/core';
import { MenuDrinks } from 'src/model/menu-drinks.model';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.scss']
})
export class MenuDetailComponent implements OnInit {

  @Input() selectedRow: MenuDrinks;
  constructor() { }

  ngOnInit() {
  }


}
