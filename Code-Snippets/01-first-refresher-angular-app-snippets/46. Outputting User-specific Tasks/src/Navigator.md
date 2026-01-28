# 45. + 46. Adding Task Component and outputting User-Specfic Tasks

<br>

## Comit Focus

In this commit, I created a new component called Task, which is responsible for displaying each user’s task.
<br>

It has the form of:

``` typescript
 {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
  }
```

The Task component receives its data from the AppComponent via the following bindings:

<br>

`[name]="selectedUser.name"`

<br>

`[selectedUserId]="selectedUser.id"`

<br>

This allows the application to determine which user is currently selected.

<br>

Inside the **TasksComponent**, the full list of tasks is filtered using the JavaScript `.filter()` method. Based on the `userId`, only tasks that match the selected user are returned through the **selectedUserTasks** getter.

<br>

This filtered list is then used in **app.component.html**, where it is rendered using the **@for** loop, ensuring that **only tasks belonging to the selected user are displayed**.

<br>

Finally, in **task.component.html**, all task-related data—such as **title, summary, due date, and user name**—is populated into the UI using the properties provided by the Task object.

<br>

<br>

### Start in [tasks.component.ts](./app/tasks/tasks.component.ts)
