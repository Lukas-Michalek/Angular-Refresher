// LEARNING: In order to use signals these needs to be first imported from @angular/core

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})

// * LEARNING: In order to accept inputs (input is a property that can be set up from outside, so for example from app.component.html) we need to go to the component that should accept the input ( in this case user.component.ts) and add the property that should be settable from outside

// INFO LEARNING: In this case I want to accept the avatar property so the image of the user as an input. I will do that by creating property (avatar) with another decorator,

// ! LEARNING: Decorator can not only be added to the classes as in Component for example, but also to the properties of the classes as in this case of avatar property. In the case the name of the decorator is Input and this also needs to be imported from @angular/core. Input decorator then behaves similar to Component decorator as it needs to be executed ===> @Input().This will mark then the property avatar as settable from outside (app.component.html for example as it is the parent of user.component)

// * LEARNING: With this input created I can then go to the place I will use this component (app.component.html in this case) and then set the avatar property there and use the property binding as this will be the proeprty that will be updating dynamicaly. I will also have to make sure that app.component.html has access to the DUMMY_USERS and I will do that by importing the DUMMY_USERS file in there (app.component.ts)

// # LEARNING: Note that the avatar property needs to have type. If left like this @Input() avatar it would have type of 'any'. If I have property like this that does not have initial value at the start as this value will be set from outside, typescript complains that it does not know which type of value (string, integer, boolean ...) will eventually be received here and it is kind of Typescript main thing to know which type of value is used where. Therfore I need to explicitly assign value type that will be used in this property.

// H LEARNING: Setting Property:
// ! LEARNING: @Input avatar: string;    => Typescript now expects that we are going to use a property with the type of String but does not understand that we are using an Angular mechanism for receiving the value of this proeprty. All Typescript sees is that there is no value being set at any point in this component, instead it is and uninitialized property => Property 'avatar' has no initializer and is not definitely assigned in the constructor.

// * LEARNING: To solve this problem I need to add ! after the property name. This is yet another Typescript feature, which simple tells TypeScript that we know that this will definitely be set to some value in the future, even though TypeScript cannot see it in this code yet. But we know that this value will be set from outside (app.component.html)
export class UserComponent {
  @Input() avatar!: string;
  @Input() name!: string;

  // * As I am not using signals in this case I will need to use Getter to calculate the past instead of computed method as I would use in Signals

  get imagePath() {
    return '../../assets/users/' + this.avatar;
  }

  onSelectUser() {}
}
