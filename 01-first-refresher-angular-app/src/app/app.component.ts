import { Component } from '@angular/core';

import { HeaderComponent } from './header.component';

// * @Component is a DECORATOR (TypeScript feature that in the ends add some metadata to the thing that is attached to -> AppComponent in this case)

// * Decorator converts this standard class into such a Angular Component that is treated as Component ->Such as a custom HTMLelement by Angular

// * This Component decorator, then receives an object with some configuration for this Component (slector, standalone, imports, ...)

// ! Selector:
// This tells Angular for which element it should look in the HTML Code so those elements can be replaced by this component and its Markup

// Markup for this component is stored in templateUrl

// ! REMEMBER THAT ANGULAR DOES NOT AUTOMATICALLY SCAN MY FILES! And therefore I need to import each componnent to its parent componnent ( for example I am importing Header Component to App Root Component as it is a part of it or I may say ... It is its child component)

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
