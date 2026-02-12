# 51. Add New Task - Second Variant

## Commit Focus

This is the second Variant of the same problem - Adding New Task. In this version New Task is rendered as a Modal Dialog and the task is to close it either by clicking cancel button or by clicking on backdrop. 
## Logic behind it 

In this version a Modal Container is created so when the user clicks Add New Task located in **TasksComponent** `onNewTaskCreate()` is triggered, that in turn turns `isNewTaskCreated` to TRUE and as there was a change Angular rerenders the whole app and when it will get to **TasksComponent** again, it satisfies the condition `@if (isNewTaskCreated)` and creates new element / component called **NewTaskComponent**. 

<br>

This component then creates **Backdrop Div** (this is just container div taking the whole width and height of the screen and its main duty is to block with interaction of any other element on UI ) and **Dialog Div** (its main duty is to be displayed on top of **Backdrop Div** so user can interact with this element).

<br>

In order to hide the **NewTaskComponent** and return back to app user can either click on **Backdrop Div** or **Cancel Button** triggering `onNewTaskCancel()` that will turn **isNewTaskCreated** to FALSE and as there was yet another change, when the app comes to the **TasksComponent** `@if (isNewTaskCreated)` automatically fails, **NewTaskComponent** is not created and instead a list of user tasks is presented.

<br>

The reason why I have `@if (isNewTaskCreated)` only to create **NewTaskComponent** is that when this element is created it basically blocks user from interacting with anything else, and although list of tasks is created as well the user is focused only on Modal Container.

### Start At []()
