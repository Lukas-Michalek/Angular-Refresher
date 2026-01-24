// ! Note that Input => Decorator
// !           input  => function needed for Signals

import { Component, input, computed } from '@angular/core'; 

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  // * LEARNING: When it comes to signals instead of adding Decorator as with State Management, I now assign an initial value to these properties and that value is the result of calling that input function. That internally tells Angular that this avatar property should be an input to this component (user.component), so that it should be settable as an attribute when that componenet is used.

  // + We can also assign an initial value which will be assumed if no input value has been received yet which could for example be an empty string ===> avatar = input('')

  // - Alternatively I do no need to pass an initial value and therefore the initial value will be undefined, but I can tell TypeScript in the end (and thus Angular) that eventually a value of different type will be received by adding angle brackets where I can set a type of value that will eventually be that input ===>   avatar = input<string>()

  // * We can also mark an input as required by calling input.required(). This is the equivalent with @Input Decorator. When using required function we can not pass an initial value, because if this input is required we are telling angular that it will be set

  // ! @Input({ required: true }) avatar!: string;  ===  avatar = input.required<string>();
 
  // # When using signals as inputs, the template behaves same as with Management change. This means that app.component will still use the DUMMY_USERS as before (in app.component.ts this file was imported and stored in users property). We can still use data and preoperty binding and those values does not need to be signals

  // * However, it is important to change the properties back to signal in template (user.component.html) and execute these as functions
  // * ===> <span>{{ name }} </span>  =====> <span>{{ name() }} </span>
  // * ===> [alt]="name"              =====> [alt]="name()"
  // * Since that is how we read signal values and how we get Angular to set up that behind the scenes subscription which does allow it to efficiently update UI 

  avatar = input.required<string>();
  name = input.required<string>(); 


  // + As we are now using signals we also need to use computed function to compute path to images. Also do not forget that this.avatar needs to be called as a signal nad thus 
  // + ===> this.avatar()

  imagePath = computed(() => {
    return '../../assets/users/' + this.avatar();
  })

  // get imagePath() {
  //   return '../../assets/users/' + this.avatar;
  // }

  
  
  // ! Note that the input value could be changed only from outside of this component! The way it works is that we will change the value in app.component, this value is then passed to the user.component and changed.
  // ! I can not howeer change the value from inside user.component! 
  // ! This does not work:

  // !  onSelectUser() {
  // !    this.avatar.set('Wololooo')
  // !  }

  // ! Property 'set' does not exist on type 'InputSignal<string>'.

  // # The input signals are READ ONLY! They can not be change from inside the componenet where the inputs are registered
  
  
  onSelectUser() {}
}
