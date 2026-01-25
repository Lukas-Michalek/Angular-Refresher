// *** 38. Exercise: Create a Configurable Component *** //

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  @Output() select = new EventEmitter();

  get imagePath() {
    return '../../assets/users/' + this.avatar;
  }

  // * 1. * The logic behind this exercise is that, when user clicks a button onSelectUser() method is triggered that will then emit (through new EventEmitter object stored in 'select' variable) id and name of the user that was clicked. Note that all this information (id, avatar and name) are already passed from parent component AppComponent when the app is rendered. AppComponent has access to these information bacouse it was imported in app.component.ts in the form of users list (from DUMMY_USERS). So all these information are avaialable in this compononet (user.component.ts).

  // - By using @Input I am receiving data from parent to child. My task is to send data (name and id) from  child to parent. That is why I need event emitter and @Output, to emit the data to parent that is AppComponent

  // # I have decided to send more than just name (id too). In order to send more than one property, I need to send them in object this.select.emit({ id: this.id, name: this.name,}). As can be seen in app.component.ts the function the onSelectUser in there need to be changed as well to ===> onSelectUser(event: { id: string; name: string }). In app.component.html that is the parent of UserComponent sending the data nothing changes and I am still using (select)="onSelectUser($event)" as before, but now the whole object is being send as event.

  // !!! --> Continue to app.component.ts <--- !!!

  onSelectUser() {
    this.select.emit({
      id: this.id,

      name: this.name,
    });
  }
}
