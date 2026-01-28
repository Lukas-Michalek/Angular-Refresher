# 48. Storing Data Models in Separate Files

## Commit Focus

To demonstrate the ability to outsource the user data model into a separate file rather than defining it directly in the `Component.ts`.

<br>

This is very useful when the same data model (for example, a `User`) is required in more than one component.

The extracted (outsourced) data type is the `User` model, which is defined in `user.model.ts` and `UserTask` which is defined in `task.model.ts`
