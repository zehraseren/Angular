import { B } from '../b/b';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Example } from '../../services/example';

@Component({
  selector: 'app-a',
  imports: [B, FormsModule],
  templateUrl: './a.html',
  styleUrl: './a.css',
})
export class A {
  constructor(public ex: Example) {}
}
