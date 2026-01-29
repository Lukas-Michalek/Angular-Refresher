# 50. Deleting Tasks

## Commit Focus

When the user clicks the Complete button located in `task.component.html`, the `TaskComponent` will be removed.
<br>

## Logic behind it

When the user clicks the **Complete** button, `onCompleteTask()` is called. This then, in `task.component.ts`, triggers the already created `EventEmitter` stored in the `complete` variable, and an **$event** (the task ID of the task that was currently clicked) is then emitted to the `TaskComponent`.

<br>

In `tasks.component.html`, there is a listener `(complete)="onCompleteTask($event)"` that triggers `onCompleteTask(id: string)` in `tasks.component.ts`.

<br>

This then filters through all the tasks and keeps only those whose task ID is different from the one that was emitted when the user clicked the **Complete** button. As a result, the task with that ID is removed, and only the remaining tasks in the list are re-rendered, effectively removing that task and its component from the UI.

### Start At []()
