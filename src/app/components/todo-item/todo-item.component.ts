import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  //styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() task: string = '';     // Входящее свойство: название задачи
  @Output() onDelete = new EventEmitter();   // Сигнал на удаление задачи
  completed: boolean = false;       // Флаг выполнения задачи

  toggleCompletion() {
  this.completed = !this.completed;
}
}