import { Component } from '@angular/core';

@Component({
  selector: 'app-lists-home',
  standalone: false,

  templateUrl: './lists-home.component.html',
  styleUrl: './lists-home.component.css',
})
export class ListsHomeComponent {
  numbers = [
    { value: 50, label: 'Müşteri' },
    { value: '3500 TL', label: 'Ciro' },
    { value: 65, label: 'Yorumlar' },
  ];

  images = [
    {
      image: '/images/dresser.jpeg',
      title: 'Şifonyer',
      description: 'Her türlü eşyanızı koyabileceğiniz şifonyer',
    },
    {
      image: '/images/couch.jpeg',
      title: 'Kanepe',
      description: 'Oturması muhteşem rahat koltuk',
    },
  ];
}
