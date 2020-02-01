import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { MenuDrinks } from 'src/model/menu-drinks.model';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {
  
  data: MenuDrinks[] = [
    {
      id: "B001",
      name: "Beer 1",
      summaryDescription: "This is the summary Description of Beer 1",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer 1",
      price: "10000"
    },
    {
      id: "B002",
      name: "Beer 2",
      summaryDescription: "This is the summary Description of Beer 2",
      color: "Vàng",
      abv: "26",
      ibu: "13",
      detailDescription: "This is the detail Description of Beer 2",
      price: "20000"
    },
    {
      id: "B003",
      name: "Beer 3",
      summaryDescription: "This is the summary Description of Beer 3",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer 3",
      price: "10000"
    },
    {
      id: "B004",
      name: "Beer 4",
      summaryDescription: "This is the summaryDescription of Beer 4",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer 4",
      price: "10000"
    },
    {
      id: "B005",
      name: "Beer 5",
      summaryDescription: "This is the summaryDescription of Beer 5",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer 5",
      price: "10000"
    },
    {
      id: "B006",
      name: "Beer 6",
      summaryDescription: "This is the summaryDescription of Beer 6",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer 6",
      price: "10000"
    },
    {
      id: "B007",
      name: "Beer 7",
      summaryDescription: "This is the summaryDescription of Beer 7",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer 7",
      price: "10000"
    },
    {
      id: "B008",
      name: "Beer 8",
      summaryDescription: "This is the summaryDescription of Beer 8",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer 8",
      price: "10000"
    },
    {
      id: "B009",
      name: "Beer 9",
      summaryDescription: "This is the summaryDescription of Beer 9",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer 9",
      price: "10000"
    },
    {
      id: "B010",
      name: "Beer 10",
      summaryDescription: "This is the summaryDescription of Beer 10",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer 10",
      price: "10000"
    },
    {
      id: "B011",
      name: "Beer 11",
      summaryDescription: "This is the summaryDescription of Beer 11",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer 11",
      price: "10000"
    },

    {
      id: "B012",
      name: "Beer 12",
      summaryDescription: "This is the summaryDescription of Beer 12",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer 12",
      price: "10000"
    },
    {
      id: "B013",
      name: "Beer 13",
      summaryDescription: "This is the summaryDescription of Beer 13",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer 13",
      price: "10000"
    },

    {
      id: "B014",
      name: "Beer 14",
      summaryDescription: "This is the summaryDescription of Beer 14",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer 14",
      price: "10000"
    },

    {
      id: "B015",
      name: "Beer 15",
      summaryDescription: "This is the summaryDescription of Beer 15",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer 15",
      price: "10000"
    },
    {
      id: "B016",
      name: "Beer 16",
      summaryDescription: "This is the summaryDescription of Beer 16",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer 16",
      price: "10000"
    },
    {
      id: "B017",
      name: "Beer 17",
      summaryDescription: "This is the summaryDescription of Beer 17",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer 17",
      price: "10000"
    },
    {
      id: "B018",
      name: "Beer 18",
      summaryDescription: "This is the summaryDescription of Beer 18",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer 18",
      price: "10000"
    },
    {
      id: "B019",
      name: "Beer 19",
      summaryDescription: "This is the summaryDescription of Beer 19",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer 19",
      price: "10000"
    },
    {
      id: "B020",
      name: "Beer 20",
      summaryDescription: "This is the summaryDescription of Beer 20",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer 20",
      price: "10000"
    },
    {
      id: "B021",
      name: "Beer 21",
      summaryDescription: "This is the summaryDescription of Beer 21",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer 21",
      price: "10000"
    },
  ];

  constructor() { }



  getDBFromFireBase(): Observable<MenuDrinks[]> {
    return new Observable(observer => {
      observer.next(this.data);
      observer.complete();
    })
  }
}
