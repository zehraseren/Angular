import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  standalone: true,
})
export class CardComponent {
  @Input() title: string = '';
  @Input() imageUrl: string = '';
  @Input() username: string = '';
  @Input() userPhoto: string = '';
  @Input() content: string = '';
}
