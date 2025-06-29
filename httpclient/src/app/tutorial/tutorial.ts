import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  imports: [],
  templateUrl: './tutorial.html',
})
export class Tutorial {
  // GET ile gelen todos listesi
  todos: any[] = [];
  // POST için gönderilecek veri şablonu
  todo: { title: string; userId: number } = { title: '', userId: 0 };

  // HTTP isteğine özel başlıklar ve query parametreleri
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      CompanyId: 'gjfkdlfdjk',
      Authorization: 'Bearer gjfkdlfdjk',
    }),
    params: new HttpParams().set('userId', 1).set('role', 'admin'), // URL parametreleri, kullanıcı filtreleme
  };

  // Modern Angular DI yöntemi ile HttpClient alınır
  readonly #http = inject(HttpClient);

  constructor() {
    this.get();
  }

  get() {
    // GET isteği gönderilir, opsiyonlarla filtreli ve header’lı şekilde
    this.#http
      .get<any[]>('https://jsonplaceholder.typicode.com/todos', this.options)
      .subscribe({
        next: (res) => {
          this.todos = res; // Gelen listeyi property’ye atanır ve UI güncellenir
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        },
      });
  }

  // HttpClient İsteğini Daha Kısa Yazma
  // Bu yolun tek sıkıntılı hatakı kısımın yakalanamaması, hatayı yakalamak için ayrı bir catch bloğu açılması gerekmektedir
  // get(){
  //   this.#http.get<any[]>("").subscribe((res) =>{
  //   });
  // }

  post() {
    this.#http
      .post<{ message: string }>(
        'https://jsonplaceholder.typicode.com/todos',
        this.todo,
        this.options
      )
      .subscribe({
        next: (res) => {
          console.log(res.message); // Başarılı yanıt mesajı konsola
        },
        error: (err: HttpErrorResponse) => {
          console.log(err); // Hata loglama, her zaman lazım
        },
      });
  }
}
