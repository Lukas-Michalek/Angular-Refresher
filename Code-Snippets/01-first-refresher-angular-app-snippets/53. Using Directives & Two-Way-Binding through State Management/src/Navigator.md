# 53a. Using Directives & Two-Way-Binding through State Management

## Commit Focus

To showcase two-way binding, the user can enter text using the ngModel directive and the FormsModule, which is designed to handle user input.

## Logic behind it

**Two-way binding is the combination of property and event binding.**

<br>

**To use two-way binding:**

- We need to `import { FormsModule } from '@angular/forms';`
- a property needs to be created in Component class (TypeScript file) for example enteredText.
- We do not need input property as the property **enterText** will be used in Template of the same component (in other words User will type in the information in new-task.html and property will be handled by new-task.ts so we are not emitting anything and we are not getting inputs passed down by parent component)
- In order to make sure that every keystroke user makes is registered the **enteredText** property needs to be updated with each keystroke. For this I will need **Directive** of which main focus is to enhance the component when it comes to user input called **[(ngModel)]** that will be located in Template of that component -> **new-task.html**
- In other words ... Directive **ngModel** is something that`s placed on input element to add extra feature and properties to that element under the hood, behind the scenes
- As Angular cannot detect **[(ngModel)]**, it must be registered in Component Class file as mentioned above through `import { FormsModule } from '@angular/forms';` and then added to component imports => `imports: [FormsModule],`


**Two way bindings by using Signal**

It is the same as with State management. The only difference is that in Component Class (.ts file) I need to specify that I am using signals as can be seen in this exercise. 
 
### Start At []()
