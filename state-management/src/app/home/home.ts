import { Common } from './../common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
})
export class Home {
  // Service’i inject ederek `common.num`’a erişim sağlar
  common = inject(Common);

  // num değerini 1 artırır — bu değişiklik tüm componentlerde yansır çünkü service shared'dir
  increment() {
    this.common.num++;
  }
}
