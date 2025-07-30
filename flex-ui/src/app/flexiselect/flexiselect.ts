import { FormsModule } from '@angular/forms';
import { FlexiSelectModule } from 'flexi-select';
import { httpResource } from '@angular/common/http';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-flexiselect',
  imports: [FlexiSelectModule, FormsModule],
  templateUrl: './flexiselect.html',
})
export default class Flexiselect {
  // API isteğini reactive olarak yapan httpResource
  // Her çağrıldığında belirttiğimiz endpoint'e GET isteği yapar
  readonly result = httpResource<any[]>(
    () => 'https://jsonplaceholder.typicode.com/users'
  );

  // API'den gelen kullanıcı listesini computed ile alır
  // Eğer data boş ya da hata alırsa [] döner
  readonly data = computed(() => this.result.value() ?? []);

  // Seçili ID'leri tutan signal (çoklu seçim için string[] olarak tanımlandı)
  readonly selectedId = signal<string[]>([]);

  // Butona basıldığında veya tetiklendiğinde seçili ID'leri console'a yazdırır
  show() {
    console.log('Selected ID:', this.selectedId());
  }
}
