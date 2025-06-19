import { Component, inject } from '@angular/core';
import { Example } from '../../services/example';

@Component({
  selector: 'app-b',
  imports: [],
  templateUrl: './b.html',
  styleUrl: './b.css',
})
export class B {
  constructor(public ex: Example) {}

  // "constructor" kullanmadan da inject edilebilir. Bu yöntem genelde dış bir kaynak veya direkt class içerisinde olmayan yerlerde inject edebilmek için kullanılır.
  //ex = inject(Example);
}
