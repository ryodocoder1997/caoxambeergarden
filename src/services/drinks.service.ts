import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { MenuDrinks } from 'src/model/menu-drinks.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {
  
  collectionName: string = 'BEERPROFILE';
  
  data1: MenuDrinks[] = [
    {
      id: "B001",
      NAME: "Beer 1",
      summaryDescription: "This is the summary Description of Beer 1",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer 1",
      PRICE: "10000"
    },
    {
      id: "B002",
      NAME: "Beer 2",
      summaryDescription: "This is the summary Description of Beer 2",
      color: "Vàng",
      ABV: "26",
      IBU: "13",
      DISCRIPTION: "This is the detail Description of Beer 2",
      PRICE: "20000"
    },
    {
      id: "B003",
      NAME: "Beer 3",
      summaryDescription: "This is the summary Description of Beer 3",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer 3",
      PRICE: "10000"
    },
    {
      id: "B004",
      NAME: "Beer 4",
      summaryDescription: "This is the summaryDescription of Beer 4",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer 4",
      PRICE: "10000"
    },
    {
      id: "B005",
      NAME: "Beer 5",
      summaryDescription: "This is the summaryDescription of Beer 5",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer 5",
      PRICE: "10000"
    },
    {
      id: "B006",
      NAME: "Beer 6",
      summaryDescription: "This is the summaryDescription of Beer 6",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer 6",
      PRICE: "10000"
    },
    {
      id: "B007",
      NAME: "Beer 7",
      summaryDescription: "This is the summaryDescription of Beer 7",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer 7",
      PRICE: "10000"
    },
    {
      id: "B008",
      NAME: "Beer 8",
      summaryDescription: "This is the summaryDescription of Beer 8",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer 8",
      PRICE: "10000"
    },
    {
      id: "B009",
      NAME: "Beer 9",
      summaryDescription: "This is the summaryDescription of Beer 9",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer 9",
      PRICE: "10000"
    },
    {
      id: "B010",
      NAME: "Beer 10",
      summaryDescription: "This is the summaryDescription of Beer 10",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer 10",
      PRICE: "10000"
    },
    {
      id: "B011",
      NAME: "Beer 11",
      summaryDescription: "This is the summaryDescription of Beer 11",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer 11",
      PRICE: "10000"
    },

    {
      id: "B012",
      NAME: "Beer 12",
      summaryDescription: "This is the summaryDescription of Beer 12",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer 12",
      PRICE: "10000"
    },
    {
      id: "B013",
      NAME: "Beer 13",
      summaryDescription: "This is the summaryDescription of Beer 13",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer 13",
      PRICE: "10000"
    },

    {
      id: "B014",
      NAME: "Beer 14",
      summaryDescription: "This is the summaryDescription of Beer 14",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer 14",
      PRICE: "10000"
    },

    {
      id: "B015",
      NAME: "Beer 15",
      summaryDescription: "This is the summaryDescription of Beer 15",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer 15",
      PRICE: "10000"
    },
    {
      id: "B016",
      NAME: "Beer 16",
      summaryDescription: "This is the summaryDescription of Beer 16",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer 16",
      PRICE: "10000"
    },
    {
      id: "B017",
      NAME: "Beer 17",
      summaryDescription: "This is the summaryDescription of Beer 17",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer 17",
      PRICE: "10000"
    },
    {
      id: "B018",
      NAME: "Beer 18",
      summaryDescription: "This is the summaryDescription of Beer 18",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer 18",
      PRICE: "10000"
    },
    {
      id: "B019",
      NAME: "Beer 19",
      summaryDescription: "This is the summaryDescription of Beer 19",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer 19",
      PRICE: "10000"
    },
    {
      id: "B020",
      NAME: "Beer 20",
      summaryDescription: "This is the summaryDescription of Beer 20",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer 20",
      PRICE: "10000"
    },
    {
      id: "B021",
      NAME: "Beer 21",
      summaryDescription: "This is the summaryDescription of Beer 21",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer 21",
      PRICE: "10000"
    },
  ];

  data2: MenuDrinks[] = [
    {
      id: "L001",
      NAME: "Beer Glasses 1",
      summaryDescription: "This is the summary Description of Beer Glasses 1",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer Glasses 1",
      PRICE: "10000"
    },
    {
      id: "L002",
      NAME: "Beer Glasses 2",
      summaryDescription: "This is the summary Description of Beer Glasses 2",
      color: "Vàng",
      ABV: "26",
      IBU: "13",
      DISCRIPTION: "This is the detail Description of Beer Glasses 2",
      PRICE: "20000"
    },
    {
      id: "L003",
      NAME: "Beer Glasses 3",
      summaryDescription: "This is the summary Description of Beer Glasses 3",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer Glasses 3",
      PRICE: "10000"
    },
    {
      id: "L004",
      NAME: "Beer Glasses 4",
      summaryDescription: "This is the summaryDescription of Beer Glasses 4",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer Glasses 4",
      PRICE: "10000"
    },
    {
      id: "L005",
      NAME: "Beer Glasses 5",
      summaryDescription: "This is the summaryDescription of Beer Glasses 5",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer Glasses 5",
      PRICE: "10000"
    },
    {
      id: "L006",
      NAME: "Beer Glasses 6",
      summaryDescription: "This is the summaryDescription of Beer  Glasses 6",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer Glasses 6",
      PRICE: "10000"
    },
    {
      id: "L007",
      NAME: "Beer Glasses 7",
      summaryDescription: "This is the summaryDescription of Beer Glasses 7",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer Glasses 7",
      PRICE: "10000"
    },
    {
      id: "L008",
      NAME: "Beer Glasses 8",
      summaryDescription: "This is the summaryDescription of Beer Glasses 8",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer Glasses 8",
      PRICE: "10000"
    },
    {
      id: "L009",
      NAME: "Beer Glasses 9",
      summaryDescription: "This is the summaryDescription of Beer Glasses 9",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer Glasses 9",
      PRICE: "10000"
    },
    {
      id: "L010",
      NAME: "Beer Glasses 10",
      summaryDescription: "This is the summaryDescription of Beer Glasses 10",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer Glasses 10",
      PRICE: "10000"
    },
    {
      id: "L011",
      NAME: "Beer Glasses 11",
      summaryDescription: "This is the summaryDescription of Beer Glasses 11",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer Glasses 11",
      PRICE: "10000"
    },

    {
      id: "L012",
      NAME: "Beer Glasses 12",
      summaryDescription: "This is the summaryDescription of Beer Glasses 12",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer Glasses 12",
      PRICE: "10000"
    },
    {
      id: "L013",
      NAME: "Beer Glasses 13",
      summaryDescription: "This is the summaryDescription of Beer Glasses 13",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer Glasses 13",
      PRICE: "10000"
    },

    {
      id: "L014",
      NAME: "Beer Glasses 14",
      summaryDescription: "This is the summaryDescription of Beer Glasses 14",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer Glasses 14",
      PRICE: "10000"
    },

    {
      id: "L015",
      NAME: "Beer Glasses 15",
      summaryDescription: "This is the summaryDescription of Beer Glasses 15",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer Glasses 15",
      PRICE: "10000"
    },
    {
      id: "L016",
      NAME: "Beer Glasses 16",
      summaryDescription: "This is the summaryDescription of Beer Glasses 16",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer Glasses 16",
      PRICE: "10000"
    },
    {
      id: "L017",
      NAME: "Beer Glasses 17",
      summaryDescription: "This is the summaryDescription of Beer Glasses 17",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer Glasses 17",
      PRICE: "10000"
    },
    {
      id: "L018",
      NAME: "Beer Glasses 18",
      summaryDescription: "This is the summaryDescription of Beer Glasses 18",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer Glasses 18",
      PRICE: "10000"
    },
    {
      id: "L019",
      NAME: "Beer Glasses 19",
      summaryDescription: "This is the summaryDescription of Beer Glasses 19",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer Glasses 19",
      PRICE: "10000"
    },
    {
      id: "L020",
      NAME: "Beer Glasses 20",
      summaryDescription: "This is the summaryDescription of Beer Glasses 20",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer Glasses 20",
      PRICE: "10000"
    },
    {
      id: "L021",
      NAME: "Beer Glasses 21",
      summaryDescription: "This is the summaryDescription of Beer Glasses 21",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer Glasses 21",
      PRICE: "10000"
    },
    {
      id: "L022",
      NAME: "Beer Glasses 22",
      summaryDescription: "This is the summaryDescription of Beer Glasses 22",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer Glasses 22",
      PRICE: "10000"
    },
    {
      id: "L023",
      NAME: "Beer Glasses 23",
      summaryDescription: "This is the summaryDescription of Beer Glasses 23",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer Glasses 23",
      PRICE: "10000"
    },
    {
      id: "L024",
      NAME: "Beer Glasses 24",
      summaryDescription: "This is the summaryDescription of Beer Glasses 24",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer Glasses 24",
      PRICE: "10000"
    },
    {
      id: "L025",
      NAME: "Beer Glasses 25",
      summaryDescription: "This is the summaryDescription of Beer Glasses 25",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer Glasses 25",
      PRICE: "10000"
    },
    {
      id: "L026",
      NAME: "Beer Glasses 26",
      summaryDescription: "This is the summaryDescription of Beer Glasses 26",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer Glasses 26",
      PRICE: "10000"
    },
    {
      id: "L027",
      NAME: "Beer Glasses 27",
      summaryDescription: "This is the summaryDescription of Beer Glasses 27",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer Glasses 27",
      PRICE: "10000"
    },
    {
      id: "L028",
      NAME: "Beer Glasses 26",
      summaryDescription: "This is the summaryDescription of Beer Glasses 28",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer Glasses 28",
      PRICE: "10000"
    },
    {
      id: "L029",
      NAME: "Beer Glasses 29",
      summaryDescription: "This is the summaryDescription of Beer Glasses 29",
      color: "Vàng nhạt",
      ABV: "25",
      IBU: "12",
      DISCRIPTION: "This is the detail Description of Beer Glasses 29",
      PRICE: "10000"
    },
  ];

  constructor(private db: AngularFirestore) {}



  getDBFromFireBase(): Observable<any[]> {
    return this.db.collection(this.collectionName).snapshotChanges();
  }

  getDBFromFireBase2(): Observable<MenuDrinks[]> {
    return new Observable(observer => {
      observer.next(this.data2);
      observer.complete();
    })
  }
}
