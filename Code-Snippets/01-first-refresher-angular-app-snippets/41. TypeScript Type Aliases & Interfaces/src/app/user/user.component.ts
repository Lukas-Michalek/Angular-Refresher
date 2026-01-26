import { Component, Input, Output, EventEmitter } from '@angular/core';

// *1* *** 41. TypeScript: Type Aliases & Interfaces ***

// - As certain TYPES can become rather complex and a bit longer it is also quite common to outsorce them and to not define them in line =>    @Input({required: true}) user!: { id: string; avatar: string; name: string;}

// + I can do this by creating so called TYPE ALLIAS

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };


// *2* Another approach I can use is to create INTERFACE.
// - Interface is just another way of defining object type 

// ! The key difference is that with the INTERFACE I can really only define object types where with the TYPE I can define other types

interface User {

    id: string;
    avatar: string;
    name: string;

  }

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

  @Input({ required: true }) user!: User;

  @Output() select = new EventEmitter();


  // + The code needs to be adjusted as well:

  get imagePath() {
    return '../../assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
