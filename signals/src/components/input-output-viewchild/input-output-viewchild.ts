import { Test } from '../test/test';
import { FormsModule } from '@angular/forms';
import { Component, ElementRef, signal, viewChild } from '@angular/core';

@Component({
  selector: 'app-input-output-viewchild',
  imports: [FormsModule, Test],
  templateUrl: './input-output-viewchild.html',
})
export default class InputOutputViewchild {
  // Signal yapısı ile reaktif bir string tanımlıyoruz
  readonly name = signal<string>('Zehra Şeren');

  // ViewChild ile template'de #headEl referanslı DOM elemanına erişim sağlanır
  // ElementRef ile HTMLHeadElement tipinde olduğunu belirtilir
  readonly headElVar =
    viewChild.required<ElementRef<HTMLHeadElement>>('headEl');
  // Tip vermeden de kullanılabilir
  // readonly headElVar = viewChild.required('headEl');

  // Butona tıklanınca çalışacak olan event
  save() {
    console.log('Event is working.');
    // Template içindeki #headEl referansına erişerek içeriğini değiştiriyoruz
    this.headElVar().nativeElement.innerText = 'deneme';
  }
}
