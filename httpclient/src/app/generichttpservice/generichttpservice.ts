import { HttpService } from '../http.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-generichttpservice',
  imports: [],
  templateUrl: './generichttpservice.html',
})
export class Generichttpservice {
  loading = false; // Yüklenme durumu kontrolü için boolean değişken

  readonly #http = inject(HttpService);

  // Callback ile temel GET işlemi – yalnızca başarı durumunu ele alır
  get() {
    this.loading = true; // Buton, loader gibi yapılarda kullanılır
    this.#http.get<any>('endpoint', () => {
      // Başarılı istek sonrası yapılacak işlemler buraya yazılır
    });
  }

  // Callback + ErrorCallback ile GET işlemi – hem başarı hem hata durumunu kontrol eder
  get2() {
    this.loading = true;
    this.#http.get<any>(
      'endpoint',
      () => {
        // Başarılı istek sonrası işlemler
      },
      (err) => {
        // Hatalı istek sonrası işlemler (loglama, uyarı vs.)
      }
    );
  }
}
