import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent {
  @Input() task: string = '';     
  @Output() onDelete = new EventEmitter();   
  completed: boolean = false;       

  toggleCompletion() {
  this.completed = !this.completed;
}
}