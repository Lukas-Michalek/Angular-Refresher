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



// * LEARNING: In order to get data from Dummy Users I need to create another property (users)in AppComponent to draw it from there. So first I will import DUMM_USERS.ts into the component that would need it (app.component.ts) as this is the parent of user.component and therefore app.component will set the values for avatar and name. 

// + Note that avatar and name are inputs created inside uer.component but will be set from app.componenet as it is its parent



export class AppComponent {


  users = DUMMY_USERS;

}
