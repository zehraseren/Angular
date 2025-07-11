import { lastValueFrom } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, resource, signal } from '@angular/core';

@Component({
  selector: 'app-resource',
  imports: [FormsModule],
  templateUrl: './resource.html',
})
export default class Resource {
  // HttpClient bağımlılığı sadece TypeScript tarafında kullanılacağı için `#` (private field) ile tanımlanır.
  readonly #http = inject(HttpClient);

  // Giriş değerleri için signal kullanılır. Başlangıçta undefined olabilir.
  readonly num1 = signal<number | undefined>(undefined);
  readonly num2 = signal<number | undefined>(undefined);

  /**
   * `resource`, sinyallere bağlı olarak otomatik API çağrıları yapılmasını sağlar.
   * `params`: hangi sinyaller değiştiğinde `loader` fonksiyonu çalışacak onu belirtir.
   * `loader`: asenkron işlem yapan ve dönen sonucu reaktif hale getiren fonksiyondur.
   */
  readonly result = resource({
    // `params` kısmında num1 ve num2 çağrılarak takip edilmeleri sağlanır.
    params: () => (this.num1(), this.num2()),

    // API çağrısı: num1 veya num2 değiştiğinde bu fonksiyon yeniden tetiklenir.
    loader: async (params) => {
      console.log(params);
      // RxJS `lastValueFrom` ile observable yapıdan promise dönüşümü
      const res = await lastValueFrom(
        this.#http.get<any[]>('https://jsonplaceholder.typicode.com/todos/')
      );

      // Alternatif olarak fetch de kullanılabilir
      // const res = await fetch(
      //   'https://jsonplaceholder.typicode.com/todos/'
      // ).then((c) => c.json());

      // Yavaş yüklenme simülasyonu için delay eklenebilir (geliştirme/test ortamı için)
      //await new Promise((resolve) => setTimeout(resolve, 2000));
      return res;
    },
  });

  /**
   * `computed`, result’tan alınan değeri işler. Eğer sonuç undefined ise boş liste döner.
   * Bu, şablonda güvenle kullanılabilmesi için varsayılan değer sağlar.
   */
  readonly todos = computed(() => this.result.value() ?? []);

  // Yüklenme durumu takibi: `resource` yüklüyor mu?
  readonly loading = computed(() => this.result.isLoading());

  /**
   * Hata mesajı varsa onu göster, yoksa undefined döner.
   * Hatalar için fallback mesaj sağlanır.
   */
  readonly error = computed(() => {
    console.log(this.result.error()?.message);
    return this.result.error() ? 'Someting went wrong.' : undefined;
  });
}
