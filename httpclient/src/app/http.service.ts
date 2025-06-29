import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  readonly #http = inject(HttpClient);

  // Generic GET metodu
  // T: dönen verinin tipi (örneğin: string[], User[], vs.)
  // callback: başarı durumunda çağrılır
  // errorCallback: (opsiyonel) hata durumunda çağrılır
  get<T>(
    endpoint: string,
    callback: (res: T) => void,
    errorCallback?: (err: HttpErrorResponse) => void
  ) {
    this.#http.get<T>(endpoint).subscribe({
      next: (res) => {
        callback(res); // Başarıyla gelen veri callback'e gönderilir
      },
      error: (err: HttpErrorResponse) => {
        console.log(err); // Hata fonksiyonu varsa çağrılır
        if (errorCallback) errorCallback(err); // Hata fonksiyonu varsa çağrılır
      },
    });
  }

  // Generic POST metodu
  // endpoint: API adresi
  // body: gönderilecek veri
  // callback: başarı fonksiyonu
  // errorCallback: opsiyonel hata fonksiyonu
  // Not: put() ve delete() işlemleri aynı mantıkla eklenebilir.
  post<T>(
    endpoint: string,
    body: any,
    callback: (res: T) => void,
    errorCallback?: (err: HttpErrorResponse) => void
  ) {
    this.#http.post<T>(endpoint, body).subscribe({
      next: (res) => {
        callback(res); // Başarıyla dönen veri
      },
      error: (err: HttpErrorResponse) => {
        console.log(err); // Hata loglama
        if (errorCallback) errorCallback(err); // Hata varsa ilgili işlem yapılır
      },
    });
  }
}
