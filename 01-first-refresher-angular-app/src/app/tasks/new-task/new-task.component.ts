import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) selectedUserID!: string;

  // @Output() newTaskClicked = new EventEmitter<void>();

  // onAddNewTask() {
  //   console.log('Task Created');
  //   console.log('Name is: ' + this.name);
  //   console.log('selectedUserID is: ' + this.selectedUserID);

  //   this.newTaskClicked.emit();
  // }
}
