import { TrCurrencyPipe } from 'tr-currency';
import { httpResource } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { FlexiGridModule, FlexiGridService, StateModel } from 'flexi-grid';

@Component({
  selector: 'app-flexigrid',
  imports: [FlexiGridModule, TrCurrencyPipe],
  templateUrl: './flexigrid.html',
})
export default class Flexigrid {
  // httpResource: API çağrılarının reactive şekilde yönetilmesini sağlar
  // () => callback içinde endpoint dinamik olarak oluşturulur
  readonly result = httpResource<any[]>(() => {
    const endpoint = this.#grid.getODataEndpoint(this.state()); // OData endpoint parametrelerini oluşturur
    console.log(endpoint);
    return '/data.json?' + endpoint; // public/data.json dosyasına parametre ekleyerek çağırır
  });

  // computed: result içindeki değeri reactive şekilde takip eder, yoksa boş dizi döner
  readonly data = computed(() => this.result.value() ?? []);

  // computed: API çağrısının yüklenme durumunu reactive olarak takip eder
  readonly loading = computed(() => this.result.isLoading());

  // FlexiGridService: tablo ile ilgili filtreleme, sayfalama ve endpoint üretme işlemleri
  readonly #grid = inject(FlexiGridService);

  // signal: tablo state'ini (sayfa numarası, filtreler vs.) reactive olarak tutar
  readonly state = signal<StateModel>(new StateModel());

  // stateChange: tablo state değiştiğinde tetiklenir (örn. sayfalama, filtreleme)
  stateChange(event: any) {
    this.state.set(event); // Yeni state'i kaydeder
    const endpoint = this.#grid.getODataEndpoint(event); // Yeni endpoint'i hesaplar
    console.log(endpoint);
  }
}
