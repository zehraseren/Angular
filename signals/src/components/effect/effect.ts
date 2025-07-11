import { FormsModule } from '@angular/forms';
import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effect',
  imports: [FormsModule],
  templateUrl: './effect.html',
})
export default class Effect {
  readonly num1 = signal<number>(5);
  readonly num2 = signal<number>(10);

  constructor() {
    // effect(), signal değerlerinde bir değişiklik olduğunda tetiklenen bir yan etki (side effect) oluşturur.
    // Computed, değer döndüren fonksiyonel hesaplamalar için kullanılır ancak effect sadece bir işlem/yan etki yürütmek için kullanılır, geri dönüş değeri gerekmez.

    // Bu örnekte, num1 değiştiğinde aşağıdaki kod bloğu otomatik olarak yeniden çalışır
    // console.log(this.num1()) yazıldığı için sadece num1'e bağımlıdır.
    // num2 değişse bile, burada kullanılmadığı için effect tetiklenmez.

    effect(() => {
      console.log('Ben çalışıyorum');
      console.log(this.num1());
    });
    // Son olarak geriye değer döndürülmeyen işlemlerde tercih edilebilir
  }
}
