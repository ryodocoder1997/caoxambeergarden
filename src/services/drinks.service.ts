import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { MenuDrinks } from 'src/model/menu-drinks.model';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {
  
  data1: MenuDrinks[] = [
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

  data2: MenuDrinks[] = [
    {
      id: "L001",
      name: "Beer Glasses 1",
      summaryDescription: "This is the summary Description of Beer Glasses 1",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer Glasses 1",
      price: "10000"
    },
    {
      id: "L002",
      name: "Beer Glasses 2",
      summaryDescription: "This is the summary Description of Beer Glasses 2",
      color: "Vàng",
      abv: "26",
      ibu: "13",
      detailDescription: "This is the detail Description of Beer Glasses 2",
      price: "20000"
    },
    {
      id: "L003",
      name: "Beer Glasses 3",
      summaryDescription: "This is the summary Description of Beer Glasses 3",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer Glasses 3",
      price: "10000"
    },
    {
      id: "L004",
      name: "Beer Glasses 4",
      summaryDescription: "This is the summaryDescription of Beer Glasses 4",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer Glasses 4",
      price: "10000"
    },
    {
      id: "L005",
      name: "Beer Glasses 5",
      summaryDescription: "This is the summaryDescription of Beer Glasses 5",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer Glasses 5",
      price: "10000"
    },
    {
      id: "L006",
      name: "Beer Glasses 6",
      summaryDescription: "This is the summaryDescription of Beer  Glasses 6",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer Glasses 6",
      price: "10000"
    },
    {
      id: "L007",
      name: "Beer Glasses 7",
      summaryDescription: "This is the summaryDescription of Beer Glasses 7",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer Glasses 7",
      price: "10000"
    },
    {
      id: "L008",
      name: "Beer Glasses 8",
      summaryDescription: "This is the summaryDescription of Beer Glasses 8",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer Glasses 8",
      price: "10000"
    },
    {
      id: "L009",
      name: "Beer Glasses 9",
      summaryDescription: "This is the summaryDescription of Beer Glasses 9",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer Glasses 9",
      price: "10000"
    },
    {
      id: "L010",
      name: "Beer Glasses 10",
      summaryDescription: "This is the summaryDescription of Beer Glasses 10",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer Glasses 10",
      price: "10000"
    },
    {
      id: "L011",
      name: "Beer Glasses 11",
      summaryDescription: "This is the summaryDescription of Beer Glasses 11",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer Glasses 11",
      price: "10000"
    },

    {
      id: "L012",
      name: "Beer Glasses 12",
      summaryDescription: "This is the summaryDescription of Beer Glasses 12",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer Glasses 12",
      price: "10000"
    },
    {
      id: "L013",
      name: "Beer Glasses 13",
      summaryDescription: "This is the summaryDescription of Beer Glasses 13",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer Glasses 13",
      price: "10000"
    },

    {
      id: "L014",
      name: "Beer Glasses 14",
      summaryDescription: "This is the summaryDescription of Beer Glasses 14",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer Glasses 14",
      price: "10000"
    },

    {
      id: "L015",
      name: "Beer Glasses 15",
      summaryDescription: "This is the summaryDescription of Beer Glasses 15",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer Glasses 15",
      price: "10000"
    },
    {
      id: "L016",
      name: "Beer Glasses 16",
      summaryDescription: "This is the summaryDescription of Beer Glasses 16",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer Glasses 16",
      price: "10000"
    },
    {
      id: "L017",
      name: "Beer Glasses 17",
      summaryDescription: "This is the summaryDescription of Beer Glasses 17",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer Glasses 17",
      price: "10000"
    },
    {
      id: "L018",
      name: "Beer Glasses 18",
      summaryDescription: "This is the summaryDescription of Beer Glasses 18",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer Glasses 18",
      price: "10000"
    },
    {
      id: "L019",
      name: "Beer Glasses 19",
      summaryDescription: "This is the summaryDescription of Beer Glasses 19",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer Glasses 19",
      price: "10000"
    },
    {
      id: "L020",
      name: "Beer Glasses 20",
      summaryDescription: "This is the summaryDescription of Beer Glasses 20",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer Glasses 20",
      price: "10000"
    },
    {
      id: "L021",
      name: "Beer Glasses 21",
      summaryDescription: "This is the summaryDescription of Beer Glasses 21",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer Glasses 21",
      price: "10000"
    },
    {
      id: "L022",
      name: "Beer Glasses 22",
      summaryDescription: "This is the summaryDescription of Beer Glasses 22",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer Glasses 22",
      price: "10000"
    },
    {
      id: "L023",
      name: "Beer Glasses 23",
      summaryDescription: "This is the summaryDescription of Beer Glasses 23",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer Glasses 23",
      price: "10000"
    },
    {
      id: "L024",
      name: "Beer Glasses 24",
      summaryDescription: "This is the summaryDescription of Beer Glasses 24",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer Glasses 24",
      price: "10000"
    },
    {
      id: "L025",
      name: "Beer Glasses 25",
      summaryDescription: "This is the summaryDescription of Beer Glasses 25",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer Glasses 25",
      price: "10000"
    },
    {
      id: "L026",
      name: "Beer Glasses 26",
      summaryDescription: "This is the summaryDescription of Beer Glasses 26",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer Glasses 26",
      price: "10000"
    },
    {
      id: "L027",
      name: "Beer Glasses 27",
      summaryDescription: "This is the summaryDescription of Beer Glasses 27",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer Glasses 27",
      price: "10000"
    },
    {
      id: "L028",
      name: "Beer Glasses 26",
      summaryDescription: "This is the summaryDescription of Beer Glasses 28",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer Glasses 28",
      price: "10000"
    },
    {
      id: "L029",
      name: "Beer Glasses 29",
      summaryDescription: "This is the summaryDescription of Beer Glasses 29",
      color: "Vàng nhạt",
      abv: "25",
      ibu: "12",
      detailDescription: "This is the detail Description of Beer Glasses 29",
      price: "10000"
    },
  ];

  constructor() { }



  getDBFromFireBase1(): Observable<MenuDrinks[]> {
    return new Observable(observer => {
      observer.next(this.data1);
      observer.complete();
    })
  }

  getDBFromFireBase2(): Observable<MenuDrinks[]> {
    return new Observable(observer => {
      observer.next(this.data2);
      observer.complete();
    })
  }
}
