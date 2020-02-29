import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scroll(id: string) {
    var target = document.getElementById(id);
    if (!target) {
      return;
    }
    target.scrollIntoView();
    setTimeout(() => {
      window.scrollBy(0,-77.83)
      }, 400);
  }
}
