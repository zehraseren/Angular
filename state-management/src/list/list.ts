import { FormsModule } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  imports: [FormsModule],
  templateUrl: './list.html',
})
export class List {
  // Parent component'ten gelen ürün listesini alır
  // Angular 16+ ile gelen 'required: true' → Bu input verilmezse derleme sırasında uyarı verir
  //  @Input({ required: true }) productsInput: any[] = [];
  @Input() productsInput: any[] = [];

  // Parent component'ten gelen başlık (isteğe bağlı input, varsayılanı boş string)
  @Input() titleInput = '';
}
