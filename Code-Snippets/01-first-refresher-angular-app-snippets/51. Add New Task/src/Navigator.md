# 51. Add New Task

## Commit Focus

- To open a new element (NewTaskComponent) after user clicks Add New Task in TasksComponent
- When a new user is clicked, close the NewTaskComponents and instead rerender List of Tasks for that current user



 <br>

## Logic behind it

When the user clicks **Add New Task** button in **TasksComponent**, `onAddNewTask()` is called emitting void information / signal to the **AppComponent** triggering event listener `(newTaskClicked)="onAddNewTask()"`, which then in **AppComponent** sets the variable `isNewTaskClicked` (created in **AppComponent**) to **TRUE** and as there was change detected Angular rerenders the whole app and when it will come to the `TasksComponent`, `@if (isNewTaskClicked)` PASSES and the **NewTaskComponent** (form where User writes down new task) is automatically rendered.

<br>

It was also important to hide such form when another user will be selected, so New Task form just for that user could be displayed.

<br>


This was achieved by implementing another EventEmitter inside **UserComponent**. This means that when the user is clicked  `onSelectUser()` is called and through **closeNewTask** emitter and empty void signal is being sent. In app html and event listener `(closeNewTask)="onCloseNewTask()"` is waiting and this triggers `onCloseNewTask()` function that changes `isNewTaskClicked` to **FALSE**. As there was a change detected, Angular rerenders the whole app and when it will come to the `TasksComponent`, `@if (isNewTaskClicked)` FAILS and thus rendering a list of **TaskComponents**.

### Start At []()
