import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layouts',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layouts.html',
  styleUrl: './layouts.css',
})
export class Layouts {}
