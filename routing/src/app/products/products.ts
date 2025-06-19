import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  // Route üzerinden alınan "id" parametresi bu property'ye otomatik bağlanır (örneğin: /products?id=10)
  @Input() id: number = 0;

  // Route üzerinden alınan "name" parametresi bu property'ye otomatik bağlanır (örneğin: /products?id=10&name=kalem)
  @Input() name: string = '';
}
