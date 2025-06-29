import { Todo } from './todo/todo';
import { inject } from '@angular/core';
import { Tutorial } from './tutorial/tutorial';
import { HttpClient } from '@angular/common/http';
import { TodoDetail } from './todo-detail/todo-detail';
import { Routes, ActivatedRouteSnapshot } from '@angular/router';
import { HttpInterceptors } from './http-interceptors/http-interceptors';
import { Generichttpservice } from './generichttpservice/generichttpservice';

export const routes: Routes = [
  {
    path: 'tutorial',
    component: Tutorial,
  },
  {
    path: 'interceptor',
    component: HttpInterceptors,
  },
  {
    path: 'asyncapi',
    component: Todo,
  },
  {
    path: 'asyncapi/:id', // /asyncapi/123 gibi ID parametresi ile detay sayfasıdır
    component: TodoDetail,
    resolve: {
      // Rota çözücüsü (resolver): route activate olmadan önce veriyi hazırlar, böylece component yüklenmeden önce veri tamamlanmış olur, bekleme olmaz
      todo: ({ params }: ActivatedRouteSnapshot) => {
        // Dependency injection burada da mümkün, HttpClient'i alıyoruz
        const http = inject(HttpClient);

        // Eğer istenirse yapay gecikme eklenebilir (aşağıdaki satırdaki gibi)
        //await new Promise((resolve) => setTimeout(resolve, 3000));

        // API çağrısı yapılır, parametre olarak ID kullanır
        return http.get(
          'https://jsonplaceholder.typicode.com/todos/' + params['id']
        );
      },
    },
  },
    {
    path: 'generichttpservice',
    component: Generichttpservice,
  }
];
