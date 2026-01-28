import { Component, Input } from '@angular/core';

import { type UserTask } from './task.model';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) UserTask!: UserTask;
}
