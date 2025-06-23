import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-todo',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './todo.html',
})
export class Todo {
  todos: any[] = [];

  readonly #http = inject(HttpClient);

  constructor() {
    this.get();
  }

  async get() {
    // Kaynak API adresi
    const endpoint = 'https://jsonplaceholder.typicode.com/todos';
     // lastValueFrom: RxJS Observable’ı Promise’e çevirmek için kullanılır, böylece async-await ile çalışır
    var res = await lastValueFrom(this.#http.get<any[]>(endpoint));
    this.todos = res; // Gelen veriyi class property’sine atar, UI bind için hazır hala gelir
  }
}
