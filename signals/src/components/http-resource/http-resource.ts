import { FormsModule } from '@angular/forms';
import { httpResource } from '@angular/common/http';
import { Component, computed } from '@angular/core';

@Component({
  selector: 'app-http-resource',
  imports: [FormsModule],
  templateUrl: './http-resource.html',
})
export default class HttpResource {
  // httpResource, Angular 18 ile gelen ve HttpClient kullanarak reaktif veri çekimi sağlayan bir yardımcı fonksiyondur.
  // `resource()` ile benzerlik gösterir, ancak şarta bağlı veri çekme (params gibi) özelliği yoktur.
  // Şarta bağlamak için bir değişken oluşturulur ancak bu şarta rağmen endpoint'e yapılacak ilk isteği engelleyemiyor
  // Ayrıca `httpResource` sadece HttpClient için tasarlanmıştır, fetch gibi yöntemleri desteklemez.

  readonly result = httpResource<any[]>(
    () => 'https://jsonplaceholder.typicode.com/todos/'
  );

  readonly todos = computed(() => this.result.value() ?? []);
  readonly loading = computed(() => this.result.isLoading());
  readonly error = computed(() => this.result.error()?.message);
}
