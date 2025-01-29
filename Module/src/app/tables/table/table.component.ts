import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: false,

  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  data = [
    { name: 'Can', age: 29, job: 'Endüstri Mühendisi', employed: 'Hayır' },
    { name: 'Osman', age: 30, job: 'Yazılım Mühendisi', employed: 'Hayır' },
    { name: 'Elif', age: 27, job: 'İşletme Mezunu', employed: 'Evet' },
  ];

  headers = [
    { key: 'name', label: 'Ad Soyad' },
    { key: 'age', label: 'Yaş' },
    { key: 'job', label: 'Meslek' },
    { key: 'employed', label: 'Aldığı ücretten memnun mu?' },
  ];
}
