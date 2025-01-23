import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  randomText = faker.lorem.sentence();
  inputValue = '';

  getInputValue(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.inputValue = inputElement.value;
    console.log(this.inputValue);
  }

  compare(randomLetter: string, inputValue: string) {
    if (!inputValue) {
      return 'pending';
    }

    return randomLetter === inputValue ? 'correct' : 'incorrect';
  }
}
