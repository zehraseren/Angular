import { FormsModule } from '@angular/forms';
import { Component, computed, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-computed',
  imports: [FormsModule],
  templateUrl: './computed.html',
})
export default class Computed {
  // computed: sadece bağımlı olduğu signal’lar değiştikçe otomatik güncellenir, manuel olarak set edilemez
  readonly num1 = signal<number>(5);
  readonly num2 = signal<number>(10);
  readonly total1 = computed(() => +this.num1() + +this.num2());
  readonly total2 = computed(() => +this.num1() * 2);
  readonly total3 = computed(() => {
    console.log(this.num1());
    return +this.num2() * 3;
  });

  // computed değerler yalnızca bağımlı signal’lar değiştikçe güncellenir, constructor içinde set edilemez
  // Eğer hem bağımlılık takibi hem de manuel müdahale gerekiyorsa linkedSignal tercih edilir
  readonly total4 = linkedSignal(() => {
    console.log('Number1: ' + this.num1());
    console.log('Number2: ' + this.num2());

    return this.num1() + this.num2();
  });

  // Böylece hem değer takip edilebiliyor hemde manuel değiştirebiliyor
  constructor() {
    this.total4.set(15);
    this.total4.update(() => 20);
  }

  // Son olarak takip edilen değer zamanla değişmeyecekse computed, manuel olarak da değiştirilecekse linkedSignal kullanılmalıdır
}
