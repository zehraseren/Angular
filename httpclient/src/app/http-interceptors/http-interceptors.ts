import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-http-interceptors',
  imports: [],
  templateUrl: './http-interceptors.html',
})
export class HttpInterceptors {
  // HttpClient servisi property olarak enjekte edilir, modern Angular stiliyle (constructor injection yerine)
  readonly #http = inject(HttpClient);

  constructor() {
    // Component oluşturulduğunda otomatik olarak get() metodu çalışır ve veri çekilir
    this.get();
  }

  get() {
    // JSONPlaceholder’dan 'todos' listesini çekilir, bu tip test API’leri öğrenmek için birebirdir
    this.#http
      .get('https://jsonplaceholder.typicode.com/todos')
      .subscribe((res) => console.log(res)); // Gelen veriyi konsola basılır, test amaçlıdır
  }
}
