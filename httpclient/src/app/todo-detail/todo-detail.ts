import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-detail',
  imports: [],
  templateUrl: './todo-detail.html',
})
export class TodoDetail {
  @Input() todo: any;
}
