import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  template: `
    <h1>ToDo App</h1>
    @if(!isUpdateWorkFormActive){
    <div>
      <label>Work</label>
      <input [(ngModel)]="work" />
      <button (click)="save()">Save</button>
    </div>
    } @else{
    <div>
      <label>Update Work</label>
      <input [(ngModel)]="updateWork" />
      <button (click)="update()">Update</button>
    </div>
    }
    <hr />
    <div>
      <ul>
        @for(data of todos; track data) {
        <li>
          {{ data }}
          @if(!isUpdateWorkFormActive){
          <button (click)="delete($index)">Delete</button>
          <button (click)="get($index)">Update</button>
          }
        </li>
        }
      </ul>
    </div>
  `,
})
export class App {
  work: string = '';
  updateWork: string = '';
  updateIndex: number = 0;
  todos: string[] = [];
  isUpdateWorkFormActive: boolean = false;

  save() {
    this.todos.push(this.work);
    this.work = '';
  }

  delete(index: number) {
    this.todos.splice(index, 1);
  }

  get(index: number) {
    this.updateIndex = index;
    this.updateWork = this.todos[index];
    this.isUpdateWorkFormActive = true;
  }

  update() {
    this.todos[this.updateIndex] = this.updateWork;
    this.isUpdateWorkFormActive = false;
  }
}
