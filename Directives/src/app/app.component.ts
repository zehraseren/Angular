import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstDirective } from './first.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FirstDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'Deniz Kum Güneş',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Belgrad Ormanı',
      url: 'https://images.unsplash.com/photo-1642106224780-6373c7fdf837?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVsZ3JhZCUyMG9ybWFuJUM0JUIxfGVufDB8fDB8fHww',
    },
    {
      title: 'Maslak',
      url: 'https://images.unsplash.com/photo-1646052584627-cf74a7870d5a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFzbGFrfGVufDB8fDB8fHww',
    },
    {
      title: 'Uludağ',
      url: 'https://images.unsplash.com/photo-1601313200014-5cf81ee09c47?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VWx1ZGElQzQlOUZ8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'Trabzon',
      url: 'https://images.unsplash.com/photo-1596404839495-0fcee3885f82?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhYnpvbnxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'Deniz Kum Güneş',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Belgrad Ormanı',
      url: 'https://images.unsplash.com/photo-1642106224780-6373c7fdf837?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVsZ3JhZCUyMG9ybWFuJUM0JUIxfGVufDB8fDB8fHww',
    },
    {
      title: 'Maslak',
      url: 'https://images.unsplash.com/photo-1646052584627-cf74a7870d5a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFzbGFrfGVufDB8fDB8fHww',
    },
    {
      title: 'Uludağ',
      url: 'https://images.unsplash.com/photo-1601313200014-5cf81ee09c47?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VWx1ZGElQzQlOUZ8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'Trabzon',
      url: 'https://images.unsplash.com/photo-1596404839495-0fcee3885f82?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhYnpvbnxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'Deniz Kum Güneş',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Belgrad Ormanı',
      url: 'https://images.unsplash.com/photo-1642106224780-6373c7fdf837?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVsZ3JhZCUyMG9ybWFuJUM0JUIxfGVufDB8fDB8fHww',
    },
    {
      title: 'Maslak',
      url: 'https://images.unsplash.com/photo-1646052584627-cf74a7870d5a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFzbGFrfGVufDB8fDB8fHww',
    },
    {
      title: 'Uludağ',
      url: 'https://images.unsplash.com/photo-1601313200014-5cf81ee09c47?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VWx1ZGElQzQlOUZ8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'Trabzon',
      url: 'https://images.unsplash.com/photo-1596404839495-0fcee3885f82?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhYnpvbnxlbnwwfHwwfHx8MA%3D%3D',
    },
  ];

  pageIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
