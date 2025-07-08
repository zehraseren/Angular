import Navbar from './navbar/navbar';
import Sidebar from './sidebar/sidebar';
import { RouterOutlet } from '@angular/router';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Navbar, Sidebar],
  templateUrl: './layout.html',
  encapsulation: ViewEncapsulation.None,
})
export default class Layout {}
