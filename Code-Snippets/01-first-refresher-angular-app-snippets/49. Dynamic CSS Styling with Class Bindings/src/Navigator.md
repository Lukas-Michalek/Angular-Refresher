# 49. Dynamic CSS Styling with Class Bindings

## Commit Focus

The main purpose of this commit is to clearly indicate which user is selected. When a user is clicked via the `(click)="onSelectUser()"` event, the active user remains highlighted.
<br>

To achieve this, a special CSS class called `.active` was created in `user.component.css`. For this class to be applied, a condition must be satisfied (the user is clicked and therefore active).

<br>

In Angular, dynamic CSS styling with class bindings means that you add or remove CSS classes in the template based on component data (booleans, values, functions, signals, etc.). This allows the UI to react to state changes (selected, active, error, done, etc.).

<br>

## 1) `[class]` for a single dynamic class

```ts
<button [class.active]="isActive">Save</button>
```

```ts
isActive = true;
```

<br>

If `isActive` is `true`, the button receives the `active` class.
If it is `false`, the class is not applied.

## 2) `[class.className]` (most common approach)

This is the clearest and most readable way to toggle a single class.

```html
<li class.selected="user.id === selectedUserId">{{ user.name }}</li>
```

### Start At [app.component.ts](../src/app/app.component.ts)
