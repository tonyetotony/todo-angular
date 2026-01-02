import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { FormComponent } from './components/form/form.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  imports: [
    
    FormComponent,
    FormsModule,      
    TodoItemComponent   
  ]
})
export class AppComponent {
  todos: string[] = [];

  handleCreateTask(newTask: string) {
    this.todos.push(newTask);
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }

  toggleCompleted(index: number) {
    const updatedTodos = [...this.todos];
    updatedTodos[index] += '*'; 
    this.todos = updatedTodos;
  }
  deleteTask(index: number) {
    this.todos = this.todos.filter((_, i) => i !== index);
  }
}