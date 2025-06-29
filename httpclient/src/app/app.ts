import { Component } from '@angular/core';
import { Tutorial } from './tutorial/tutorial';
import { Router, RouterOutlet } from '@angular/router';
import { HttpInterceptors } from './http-interceptors/http-interceptors';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tutorial, HttpInterceptors],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(private router: Router) {}

  goTutorial() {
    this.router.navigateByUrl('/tutorial');
  }

  goInterceptor() {
    this.router.navigateByUrl('/interceptor');
  }

  goAsyncApi() {
    this.router.navigateByUrl('/asyncapi');
  }
  goGenericHttpService() {
    this.router.navigateByUrl('/generichttpservice');
  }
}
