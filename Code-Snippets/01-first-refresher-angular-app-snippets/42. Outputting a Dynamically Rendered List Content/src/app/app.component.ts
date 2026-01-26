import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';

import { DUMMY_USERS } from './DUMMY_USERS';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;

  // * Another approach on solving this exercise is to send just user id from UserComponent to the AppComponenet(here) and use JavaScript function .find to find a user name by that ID. It will go through every object in the list (DUMMY_USER in this case) so every 'user' and compare the desired property (user ID in this case). If it will find the match it will return TRUE and so that user object (it will be object with id, name and avatar and I will need to extract just name in app-tasks componenet in app.component.html)

  // # By using getter (standard way to retrieve information when working with state management change) I am able to send it to the component

  // - Also by putting ! at the end of this.selectedUserId)!  I am letting know that this object will never be unidentified



  selectedUserId = 'u1';

  get selectedUserName() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
    console.log('Selected user id is ' + id);
  }
}