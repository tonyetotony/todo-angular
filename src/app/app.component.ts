import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Обязательно импортируйте
import { FormComponent } from './components/form/form.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.scss'],
  imports: [
    
    FormComponent,
    FormsModule,       // ← добавить
    TodoItemComponent    // ← добавить
  ]
})
export class AppComponent {
  todos: string[] = []; // Массив наших задач

  // Обработчик добавления новой задачи
  handleCreateTask(newTask: string) {
    this.todos.push(newTask);
  }

  // Обработчик удаления задачи
  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }

  // Переключение статуса выполнения задачи
  toggleCompleted(index: number) {
    const updatedTodos = [...this.todos];
    updatedTodos[index] += '*'; // Простое обозначение выполнения (символ *)
    this.todos = updatedTodos;
  }
  deleteTask(index: number) {
    this.todos = this.todos.filter((_, i) => i !== index);
  }
}