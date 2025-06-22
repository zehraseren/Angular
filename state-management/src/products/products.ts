import { List } from '../list/list';
import { List2 } from '../list2/list2';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [List, List2],
  templateUrl: './products.html',
})
export class Products {
  // productsInput: List component’ine gider
  productsInput: any[] = [
    {
      name: 'Bilgisayar',
      price: 10000,
    },
    {
      name: 'Laptop',
      price: 15000,
    },
    {
      name: 'Telefon',
      price: 8000,
    },
  ];

  // nameOutput: child’a iletilen veri
  nameOutput: string = 'Bilgisayar';
  // Child'dan gelen eventi yakalar
  saveOutput(event: any) {
    console.log(event); // Şu an undefined döner (void olduğu için)
  }
}
