import { Component } from '@angular/core';
import { Tutorial } from './tutorial/tutorial';
import { SmService } from './sm-service/sm-service';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tutorial, SmService],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(private router: Router) {}

  goTutorial() {
    this.router.navigateByUrl('/tutorial');
  }

  goService() {
    this.router.navigateByUrl('/service');
  }
}
