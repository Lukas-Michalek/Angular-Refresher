import { Component, Input } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';

import { DUMMY_USERS } from './DUMMY_USERS';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})



// * 4. When the user clicks a button Event Listener <button (click)="onSelectUser()"> calls the onSelectUser() function located in user.componenet.ts (becasue it is that component that triggers it). This function then emits the value that was sent (in this case user ID) thanks to EventEmitter object that is stored in 'select' property (to create this property and new EventEmitter I need Output decorator). This select property then emits this information (id) to its parent (that is app.component.html) where there is a custom listener (select)="onSelectUser($event) waiting for the change and triggers another EventListener that triggers onSelectUser function located in app.component.ts*

// BUTTON CLICK
//      ↓
// child.onSelectUser()
//      ↓
// this.select.emit(this.id)
//      ↓
// (select)="onSelectUser($event)"
//      ↓
// parent receives ID

//+ Simple rule to remember

//+ @Input() → parent → child

//+ @Output() → child → parent

//+ emit() → send data upward


export class AppComponent {
  users = DUMMY_USERS;

  onSelectUser(id: string){

    console.log('Selected user with id' + id)

  }


}
