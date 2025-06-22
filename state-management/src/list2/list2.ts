import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list2',
  imports: [FormsModule],
  templateUrl: './list2.html',
})
export class List2 {
  // Parent'tan gelen veri
  @Input() nameOutput = '';

  // Parent'a veri göndermek için tanımlanan EventEmitter
  // string veri göndermek için → EventEmitter<string>
  //@Output() myEvent = new EventEmitter<string>();
  // Burada veri gönderilmiyor, sadece sinyal → EventEmitter<void>
  @Output() myEvent = new EventEmitter<void>();

    // Butona tıklanınca ya da başka bir tetikte çağrılır
  saveOutput() {
    // this.nameOutput'u göndermek için yukarıdaki satırı aktif et → emit(this.nameOutput);
    //this.myEvent.emit(this.nameOutput);
    this.myEvent.emit(); // Sadece "event oldu" bilgisini yollar
  }
}
