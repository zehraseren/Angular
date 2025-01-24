import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConvertPipe } from "./convert.pipe";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ConvertPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = '';
  date = '';
  money: number = 0;
  height: number = 0;
  lessons = {
    name: 'Matematik',
    subject: 'Natural Numbers',
    currentPoint: 65,
  };
  miles: number = 0;

  onNameChange($event: Event) {
    this.name = ($event.target as HTMLInputElement).value;
  }

  onDateChange($event: Event) {
    this.date = ($event.target as HTMLInputElement).value;
  }

  onMoneyChange($event: Event) {
    this.money = parseFloat(($event.target as HTMLInputElement).value);
  }

  onHeightChange($event: Event) {
    this.height = parseFloat(($event.target as HTMLInputElement).value);
  }

  onMilesChange($event: Event) {
    this.miles = parseFloat(($event.target as HTMLInputElement).value);
  }
}
