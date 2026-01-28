import { Component, Input, Output, EventEmitter } from '@angular/core';

import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true, 
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;


// * 2. * By creating the selected property (note that the ! tells TypeScript that the value will definitely be set). 

// ! Continue to app.component.html

  @Input ({required:true}) selected!: boolean;

  @Output() select = new EventEmitter();

  get imagePath() {
    return '../../assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
