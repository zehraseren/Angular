import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-itemlist',
  standalone: false,

  templateUrl: './itemlist.component.html',
  styleUrl: './itemlist.component.css',
})
export class ItemlistComponent {
  @Input() items = [];
  constructor() {}

  ngOnInit(): void {
    console.log(this.items);
  }
}
