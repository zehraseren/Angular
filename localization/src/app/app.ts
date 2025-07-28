import { AfterViewInit, Component, inject } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-root',
  imports: [TranslocoModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements AfterViewInit {
  readonly #transloco = inject(TranslocoService);

  constructor() {
    // localStorage'dan dil alınır, yoksa 'en' varsayılan olarak ayarlanır
    const lang = localStorage.getItem('lang') ?? 'en';
    this.#transloco.setActiveLang(lang); // ilk yükleme dili
  }

  // ngAfterViewInit içinde çeviri sonrası DOM çıktı kontrolü yapılabilir
  ngAfterViewInit(): void {
    // translate() metodu senkron çalışır, ancak çeviri dosyası henüz yüklenmemiş olabilir
    setTimeout(() => {
      const title = this.#transloco.translate('TITLE');
      console.log(title); // Konsola ilgili dilde başlık yazdırılır
    }, 1000);
  }

  changeLang(lang: string) {
    // Kullanıcı dili değiştirir, localStorage'a kaydedilir
    this.#transloco.setActiveLang(lang);
    localStorage.setItem('lang', lang);
  }
}
