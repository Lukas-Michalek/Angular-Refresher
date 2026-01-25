//  * 1. *  35. Working with Outputs & Emitting Data  **  //

// - Note that I will be working with Management State Change rather that signals here

// + The goal here is that after I click a user (user.component.html) I want to show their tasks. This task list will not show inside user component because the user element is only responsoble for outputing the user element (button on UI with avatar and name). Therefore the information that hte user was clicked must get out of the user component and must be passed on to the app component (app.component.ts) because it is the app component that is outputting the user and it is the app component that could then output the tasks of that user nexto to that unordered list in app.component.html

// # So we need to let the app component know when a user is clicked so when the button in the user component is clicked.

// * There is already an event listener in user.component.html ===> <button (click)="onSelectUser()"> but I need to OUTPUT this information that this button was clicked. I will do that with Angular output properties

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})


// * To set up the output property I need to add another regular property I can call it according to the function. The name should describe the custom event I plan on emitting, and because I want to pass the information that a specific user was selected to the component that`s using the UserComponent

// - The select componenet must be decorated with another decorator that is imported from Angular => the Output decorator. Imported like Input decorator and used just like the input.

// # Unlike the input, the select property will receive an initial value. This initial value is a 'new EventEmitter object', where EventEmitter is actually also imported from Angular Core

// + This EventEmitter object ==> @Output select = new EventEmitter(); ==> will then allow me to emit custom values through that select property to any parent component (in this cas app.component) that is interested 


export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  @Output() select = new EventEmitter<string>(); 

  get imagePath() {
    return '../../assets/users/' + this.avatar;
  }

  
  // ! To add extra security and to prevent errors, it is advised to add to the new Emitter object the specific value type I am expected to send. So in this case it is <string> as I am emitting user id which is string and also in app.component.ts the function onSelectUser(id: string) is expecting string. Now if there by accident this.select.emit(this.id) would instead send number tthis.select.emit(3) I would not get error but the program would not work. Now with stating the value type I will get error and can therefore catch this problem.


  
  // * When user clicks a button, Event Listener calls a onSelectUser() function ===> <button (click)="onSelectUser()">   ===> the select property that was set up as EventEmitter object will emit a new value 

  // + Now I need to pass the value that should be emitted to this emit method ( .emit() )which is provided by EventEmitter object which is stored in select property.
  // + As an initial value I am going to use user ID that is one of the properties of each object in DUMMY_USER that will be passed through Input decorator (same as avatar and name). I receive it as an input and pass it back to parent component whenever a user is selected

  // ! 2 ! Go to app.component.html.

   
  
  onSelectUser() {

    this.select.emit(this.id)

  }
}
