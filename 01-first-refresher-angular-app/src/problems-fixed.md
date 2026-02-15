# Goal of this File

This file serves me as a reminder of the problems I had and the way I solved them

## Problem 1

### How to Create a new Element on UI (form where user can write down new task) after user clicks a button (Add Task)

<br>

The button Add Task is hidden inside **`AppComponent -> TasksComponent`**. This click then needs to send an information that the Add Button was clicked. This information is emitted to its parent component **(AppComponent)** where there is `isNewTaskClicked` variable that checks if it is clicked

<br>

The way this works ==>
<br><br>
Add New Task Button is clicked. Event Listener ( click ) then calls `onAddNewTask` function that is emitting and empty value - It is just emitting a change of state

- In its parent component `AppComponent` event listener (newTaskClicked) is triggering function `onAddNewTask()` that is inside `app.component.ts` and will change the variable `isNewTaskClicked` to true ( as it was clicked). Because there was some change detected the whole webpage is rerendered again ( remember we are using STATE MANAGEMENT SYSTEM) and because `isNewTaskClicked` is now true `@if (isNewTaskClicked)` is satisfied and new component is created - `NewTaskComponent` (basically the form where user fills the form and new task is created)

<br>

NewTaskComponent then receives **[name]** and **[selectedUserID]** that was passed down through `Input` from **AppComponent** event listener (newTaskClicked) regarding the user that was previously selected so the TasksComponent can display information about that current user.

<br>

Now, it is important to understand that when I will click another user, and therefore the whole web page gets Rerendered I want to `NewTaskComponent` dissappear and the list of their tasks to display instead.

<br>

To do this I must make sure that when the user is clicked via button located in **`AppComponent` event listener (newTaskClicked) is -> UserComponent**, `isNewTaskClicked` will be set to FALSE and therfore the condition `@if (isNewTaskClicked)` inside TasksComponent will fail and list of **TaskComponents** ( the list of user tasks ) will be rendered instead

<br><br>

## Problem 2 -> User clicks on Add Button and NewTaskComponent is created. When User clicks on UserComponent NewTaskComponent disappear and List of Tasks reappear (TasksComponents will generate all of that current user tasks)

### The main logic

- User clicks Add New Task button located in Header of TasksComponent
- This fires `onAddNewTask` function that is emitting and empty value - It is just .emitting a change of state
- In its parent component `AppComponent` event listener (newTaskClicked) is waiting and as soon as it gets the void output event to notify the parent it triggers `onAddNewTask()` function and `isNewTaskClicked` is the set to true (remember that `isNewTaskClicked` was declared in the main **AppComponent** as it is necessary do decide if the user clicked **Add New Task** or just the user to render all **TaskComponent**). As there was a change the Angular rerenders everything (we are using State Change Mechanism here) and when it gets to **TasksComponent** it will render **NewTaskComponent**
- To make sure that after the click on user we will get their tasks at first I made sure that when user clicks **UserComponent** (one of the buttons on left) **onSelectUser()** is triggered and `(closeNewTask)="onCloseNewTask()"` is then emitted making sure that in **AppComponent** `isNewTaskClicked` is the set to **FALSE** and so as it was change yet again Angular rerenders everything and when it comes to the **TasksComponent** as `isNewTaskClicked` is now **FALSE** the list of Tasks will be rendered instead

The Problem was that After clicking AddTask a form was rendered (meaning that NewTaskComponent was created as @if (isNewTaskClicked) was satisfied), but when user clicked a button - UserComponent nothing changed.

The mistake was that I was sending this from NewTaskComponent to TasksComponent instead as the button was in TasksComponent, and nothing really changed.

#### FIX

I fixed this by making sure Tasks emitted and empty void value to the App component that the task was clicked and the value of isNewTaskClicked changed to true and then again when user clicked USer from the list this emitted yet another void value to app component, triggered (closeNewTask)="onCloseNewTask()" and isNewTaskClicked was set to FALSE so with rerendering @if (isNewTaskClicked) failed and list of Tasks was rendered instead

<br>

---

---

---

# Goal of this File -> More Concise

This file serves as a reminder of the problems I encountered and how I solved them.

## Problem 1

### How to create a new UI element (form for creating a new task) after clicking the **Add Task** button

<br>

The **Add Task** button is located inside **`TasksComponent`**, which is rendered by **`AppComponent`**.  
When the button is clicked, this action needs to be communicated to **`AppComponent`**, where the state variable `isNewTaskClicked` is defined.

<br>

### How it works

<br><br>

- The **Add New Task** button is clicked in `TasksComponent`
- The click event calls `onAddNewTask()`, which emits a **void output event** (it only signals a state change)
- In the parent component (`AppComponent`), the `(newTaskClicked)` event listener receives this event and sets `isNewTaskClicked` to `true`
- Because the state has changed, Angular rerenders the UI
- Since `isNewTaskClicked` is now `true`, the condition `@if (isNewTaskClicked)` is satisfied and **`NewTaskComponent`** is created
- `NewTaskComponent` represents the form where the user creates a new task

<br>

`NewTaskComponent` receives **[name]** and **[selectedUserID]** via `@Input()` from `AppComponent`, so it knows which user the new task belongs to.

<br>

When another user is selected, the page rerenders. In this case, **`NewTaskComponent` must disappear**, and the list of tasks for the newly selected user must be displayed instead.

<br>

To achieve this, when a user is clicked in **`UserComponent`**, `isNewTaskClicked` is set to **FALSE** in `AppComponent`.  
As a result, the condition `@if (isNewTaskClicked)` in `TasksComponent` fails, and the list of **TaskComponents** is rendered instead.

<br><br>

## Problem 2

### User clicks **Add Task**, `NewTaskComponent` is created.

### User then clicks another **UserComponent**, and the task list reappears.

<br>

### Main logic

- User clicks **Add New Task** in `TasksComponent`
- `onAddNewTask()` emits a void output event
- `AppComponent` listens to this event and sets `isNewTaskClicked` to `true`
- Angular detects the state change and rerenders the UI
- `TasksComponent` now renders `NewTaskComponent`

<br>

- When the user clicks a **UserComponent**, `onSelectUser()` is triggered
- This emits a `(closeNewTask)` event
- `AppComponent` handles this event with `onCloseNewTask()` and sets `isNewTaskClicked` to **FALSE**
- Angular rerenders the UI again
- Since `isNewTaskClicked` is now **FALSE**, `TasksComponent` renders the task list instead of the form

<br>

### The problem

After clicking **Add Task**, the form was displayed correctly.  
However, clicking another user did nothing.

The mistake was that the close event was being emitted **from `NewTaskComponent` to `TasksComponent`**, even though the state was owned by `AppComponent`.  
Because of this, the actual application state never changed.

<br>

### FIX

The fix was to ensure that:

- `TasksComponent` emits a **void output event** to `AppComponent` when **Add Task** is clicked
- `AppComponent` updates `isNewTaskClicked` to `true`
- When a user is clicked, another void output event is emitted to `AppComponent`
- `onCloseNewTask()` sets `isNewTaskClicked` to **FALSE**
- Angular rerenders the UI, `@if (isNewTaskClicked)` fails, and the task list is rendered instead
