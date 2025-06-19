import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private router: Router) {}

  method() {
    // İkinci bir parametre verilmek istediğinde (['about', '', '']) şeklinde olur
    this.router.navigate(['about']);

    //İkinci bir parametre verilmek istediğinde (['/about/../..']) şeklinde olur
    //this.router.navigateByUrl("/about")
  }
}
