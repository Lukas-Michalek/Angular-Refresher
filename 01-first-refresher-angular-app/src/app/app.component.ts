import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';

import { DUMMY_USERS } from './DUMMY_USERS';
import { TasksComponent } from './tasks/tasks.component';


// * 1. *** 43. Outputting Conditional Content *** //

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;


// - This way, the property `selectedUserId` is always assigned the initial value `'u1'`, and therefore the `TasksComponent` would always be rendered with user1.

// selectedUserId = 'u1';


// # However, if I declare the property `selectedUserId` this way (`selectedUserId?: string;`), I am not assigning any initial value at all. In this case, the `TasksComponent` would be  rendered, but it would be empty while still being present in the UI.


// * The question mark makes the property optional. That means the property may exist, or it may be `undefined`. It is equivalent to this: selectedUserId: string | undefined;


// ! selectedUserId?: string === selectedUserId: string | undefined

selectedUserId?: string;


// ! Continue to app.component.html
 
  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
    console.log('Selected user id is ' + id);
  }
}