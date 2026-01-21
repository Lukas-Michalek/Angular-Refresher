import { Component } from '@angular/core';

import { DUMMY_USERS } from '../DUMMY_USERS';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})




export class UserComponent {

  selectedUser = DUMMY_USERS[0]


  // This is the logic of the component.

// Everything inside controls what the template can see and use.

// * So basically ---> “Pick the first user from my fake user list and make it available to the template [user.component.html]”

// In HTML (user.component.html), we can now use:
// <p>{{ selectedUser.name }}</p>


// ! *** GETTER TO COMPUTE IMAGE PATH ***

// INFO -> GETTER is a method(function inside a class) that is usable like a property so it does not need to be excecuted explicitly and that is meant to preduce and return new value

// + As I am refering to the selectedUser proprty from WITHIN THE SAME CLASS (I need this info ftom inside the same class instead of the template) I need to specifiy this by using this keyword! -> This is the JavaScript behaviour!

  get imgePath () {

    return '../../assets/users/' + this.selectedUser.avatar

  }

}

