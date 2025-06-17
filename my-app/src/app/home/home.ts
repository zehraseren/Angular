import { Component } from '@angular/core';

@Component({
  // Component'in HTML içinde hangi isimle kullanılacağını belirler.
  selector: 'app-home',
  // Angular 20 itibarıyla standalone varsayılan olarak true gelir.
  // Burada açıkça belirtmeye gerek yoktur, ama okunabilirlik için bırakılmıştır.
  standalone: true,
  // Component'in ihtiyaç duyduğu başka component, directive veya pipe'ları buraya ekler.
  imports: [],
  // Component'in HTML şablonunun dosya yolu. Görüntülenecek arayüz burada tanımlanır.
  templateUrl: './home.html',
  // Component'e özel CSS dosyasının yoludur. CSS burada tanımlanır ve sadece bu component'e uygulanır.
  // Çoğul CSS dosyalarında styleUrls: ["", ""] şeklinde olur.
  styleUrl: './home.css',
})
export class Home {}
