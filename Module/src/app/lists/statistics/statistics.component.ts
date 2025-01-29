import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statistics',
  standalone: false,

  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css',
})
export class StatisticsComponent {
  @Input() data = [];
}
