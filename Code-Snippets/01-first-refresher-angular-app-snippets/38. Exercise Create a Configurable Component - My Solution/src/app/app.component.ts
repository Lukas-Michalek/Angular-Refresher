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


// * 2. * As I am receiving more than one property from user.component.ts via EventEmitter (remember this is the Child -> Parent Logic) I will need to store the variable selectedUserName that will be then from AppComponent passed on its child TasksComponent and then it will be shown in tasks.component.html on UI.

// ! When receiving more than one property this is the argument syntax event: { id: string; name: string } and to unpack it I will treat it as an object -> event.id and event.name 

// !!! -->   Continue to app.component.html   <--- !!!



  selectedUserName = '';

  onSelectUser(event: { id: string; name: string }) {
    this.selectedUserName = event.name;

    console.log(
      'Selected User ID is ' +
        event.id +
        ' and Selected User Name is ' +
        event.name,
    );
  }
}
