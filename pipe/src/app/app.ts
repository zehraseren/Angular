import { TodoPipe } from './todo-pipe';
import { NamePipe } from './name-pipe';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, TodoPipe, NamePipe, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  name: string = 'Zehra';
  work: string = '';
  todos: string[] = ['Domates', 'Armut', 'Elma'];
  search: string = '';

  // Angular Pipes
  nameNg: string = 'zehra Şeren';
  dateNg: Date = new Date();
  num: number = 538.23;

  save() {
    this.todos.push(this.work);
    this.work = '';
  }
}
