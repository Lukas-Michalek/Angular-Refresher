import { Component,  Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({required:true}) name!: string;
  @Input({required:true}) selectedUserID!: string;

  tasks = [{
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
  }]

  
  // * Filter through all the Tasks stored in database and filter only those that are belonging to the user that is currently clicked based on the userID as that is the user that was sent at this exact moment from AppComponent. So only those tasks belonging to that user will be shown at the end.

  // # Filter method will go through the list of items and if the item meets the condition then that item will be added to sublist that will be then returned

  get selectedUserTasks() {

    return this.tasks.filter((task) => task.userId === this.selectedUserID)


  }



}
