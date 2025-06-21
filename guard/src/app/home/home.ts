import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  name: string = '';

  constructor(private router: Router) {}

  checkStatus() {}

  logout() {
    //localStorage.clear();
    localStorage.removeItem("token")
    this.router.navigateByUrl('/');
  }
}
