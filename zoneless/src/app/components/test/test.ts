import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.html',
  styleUrl: './test.css',
})
export class Test {
  // signal kullanımıyla zoneless reaktivite elde edilir.
  readonly name = signal<string>('');

  // Bu klasik bir property'dir. Signals kadar reaktif değildir.
  lastname = '';

  // Manuel değişim algılama için kullanılır.
  readonly cdr = inject(ChangeDetectorRef);

  constructor() {
    // Manuel olarak değişiklikleri algılatmak için kullanılır.
    this.cdr.detectChanges();
  }
}

// Zoneless Change Detection Nedir?
// --------------------------------------
// Zoneless, Angular'da varsayılan olan Zone.js'i kullanmadan değişiklikleri algılanmasına olanak sağlar.
// Zone.js normalde tüm bileşen ağacını tekrar tekrar kontrol eder ve performans maliyeti oluşturur.
// Zoneless yapıda manuel olarak verya signals gibi reaktif yapılarla daha hedeflive hızlı güncellemeler yapılır.

// Avantajları:
// - Daha hızlı ve optimize çalışır.
// - Mobil ve büyük uygulamalarda performansı ciddi şekilde artırır.
// - Geliştiriciye daha fazla kontrol sağlar.

// Dezavantajları:
// - Daha fazla dikkat ve manuel müdahale gerektirir.
// - Her şey otomatik değil, ne zaman güncelleneceğini geliştirici kontrol eder.

//Zoneless Yapı Nasıl Kullanılır?
// - Zone.js import'u kaldırılır (main.ts veya polyfills.ts gibi yerlerden).
// - Signals veya manual change detection (`ChangeDetectorRef`) ile birlikte kullanılır.
// - Angular 17+ ile gelen `signal`, `computed`, `effect` gibi yapılar zoneless uyumludur.
