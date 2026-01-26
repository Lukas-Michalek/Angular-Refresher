import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {

  // * We are not creating an object here! But rather we are creating a TYPE. We are telling TypeScript which kind of value will eventually get here 

  // - I still need to add ! because I still need to convince TypeScript that this type will definitelly be defined because of this { required:true } setting
  
  @Input({required: true}) user!: {

    id: string;
    avatar: string;
    name: string;

  };

  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  @Output() select = new EventEmitter();

  // get imagePath() {
  //   return '../../assets/users/' + this.avatar;
  // }

  // onSelectUser() {
  //   this.select.emit(this.id);
  // }

  // + The code needs to be adjusted as well:

    get imagePath() {
    return '../../assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
