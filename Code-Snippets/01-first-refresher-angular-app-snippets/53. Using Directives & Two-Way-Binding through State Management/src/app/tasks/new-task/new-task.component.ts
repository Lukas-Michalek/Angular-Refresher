import { Component, EventEmitter, Output, signal } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() newTaskCancel = new EventEmitter<void>();

  // enteredText = '';
  // enteredDueDate = '';
  // enteredTitle = '';

  // * In order use 2-way binding with signals I just need to add signal while everything in template remain the same

  enteredText = signal('');
  enteredDueDate = signal('');
  enteredTitle = signal('');

  onNewTaskCancel() {
    this.newTaskCancel.emit();
    console.log(
      'enteredText is ' +
        this.enteredText +
        ' | enteredDueDate is: ' +
        this.enteredDueDate +
        ' | enteredTitle is: ' +
        this.enteredTitle,
    );
  }
}
