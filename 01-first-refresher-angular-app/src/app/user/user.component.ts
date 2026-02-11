import { Component, Input, Output, EventEmitter } from '@angular/core';

import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;

  @Input({ required: true }) selected!: boolean;

  @Output() select = new EventEmitter<string>();

  @Output() closeNewTask = new EventEmitter<void>();

  get imagePath() {
    return '../../assets/users/' + this.user.avatar;
  }

  
  // When User is clicked make sure to display their list of tasks instead of open form for Add New Task. By emitting  closeNewTask to AppComponent, I am setting there isNewTaskClicked to false and therefore as there was some change, Angular rerenders he whole app and list of all tasks for that current user are rendered instead
  
  onSelectUser() {
    this.select.emit(this.user.id);
    this.closeNewTask.emit();
  }
}
