import { Validate } from './validate';
import { Component } from '@angular/core';
import { Renklendir } from './renklendir';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Renklendir, Validate],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
