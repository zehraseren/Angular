import { Home } from '../home/home';
import { Navbar } from '../navbar/navbar';
import { Component } from '@angular/core';

@Component({
  selector: 'app-layouts',
  imports: [Navbar, Home],
  templateUrl: './layouts.html',
})
export class Layouts {}
