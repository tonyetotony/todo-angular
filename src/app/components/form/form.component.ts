import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  imports: [FormsModule]
})
export class FormComponent {
  @Output() createTask = new EventEmitter<string>();

  taskName: string = '';

  submitTask() {
    if (!this.taskName.trim()) return;
    this.createTask.emit(this.taskName);
    this.taskName = '';
  }
  addTask() {
    if (this.taskName.trim()) {
      this.createTask.emit(this.taskName);
      this.taskName = ''; 
    }
  }
}
