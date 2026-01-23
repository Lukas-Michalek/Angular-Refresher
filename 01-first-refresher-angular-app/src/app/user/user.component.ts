// LEARNING: In order to use signals these needs to be first imported from @angular/core

import { Component, signal, computed } from '@angular/core';

import { DUMMY_USERS } from '../DUMMY_USERS';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // * LEARNING: As signal was imported, I can now create Signal Value and store it in a property of my
  // * LEARNING: component - selectedUser and set up initial value as well

  // # LEARNING: A signal is a sort of container that contains a value like this initial dummy user and
  // # LEARNING: when I will change this value, Angular will be notified about this change and Angular
  // # LEARNING: is then able to identify all the places (for example in the user template) where that
  // # LEARNING: value is being used (where the signal is being used in the end) and Angular is then able
  // # LEARNING: to update these places.

  selectedUser = signal(DUMMY_USERS[0]);

  // * LEARNING: Because selectedUser is now signal I will need to treat that way. This means that while while this was fine in Stated Management change ->  '../../assets/users/' + this.selectedUser.avatar; I need to use computed function instead.

  // INFO: When using this computed function, Angular automatically analyzes whether we are reding some signal value inside of that function we passed to computed and if that is the case, Angular again sets up the subscription to that signal that is being used there => selectedUser() signal in this case, and whenever this signals receives a new value (for example new user and thus change in index) and only then Angular will recompute the image path here and thus it is very effective way of setting up computed value as this value will not be recomputed every time anything changes in this component or the overall application but instead it will be only recomputed if one of the signals used inisde of it changes. Also do not forget to change this in HTML Template so it could be executed in the same way as signal

  imagePath = computed(
    () => '../../assets/users/' + this.selectedUser().avatar,
  );

  // get imagePath() {
  //   return '../../assets/users/' + this.selectedUser.avatar;
  // }

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

    // + LEARNING: To change the value of signal, I will need to call set method on that signal object

    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
