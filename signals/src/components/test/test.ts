import { FormsModule } from '@angular/forms';
import { Component, input, linkedSignal, output } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [FormsModule],
  templateUrl: './test.html',
})
export class Test {
  readonly name = input.required<string>();

  // Signal'e bağlanmış, manuel değiştirilebilir formda reaktif yapı
  readonly nameSignal = linkedSignal(() => this.name());

  // @Output() myEvent = new EventEmitter<void>();
  // EventEmitter alternatifi olan output API'si ile event
  readonly myEvent = output<void>();

  constructor() {
    // nameSignal'in değerini boş string ile set edilir
    this.nameSignal.set('');
  }

  // save() fonksiyonu çalıştığında parent'a event fırlatır
  save() {
    this.myEvent.emit();
  }
}
