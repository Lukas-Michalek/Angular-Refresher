# 43. Outputting Conditional Content

<br>

## Comit Focus

To demonstrate the ability to output conditional content (content that should be rendered only under certain circumstances):

In this case, I am showcasing that the AppTasks component is rendered only if a user is selected (for now, it only displays the user’s name). If no user is selected, a fallback text appears: “Select a user to see their tasks.”

<br>

The code is set up so that no initial value is assigned to selectedUserId?. Therefore, before clicking the button, no user ID is sent to UserComponent, which would otherwise emit this value back to AppComponent. AppComponent then passes this ID to TasksComponent to render the selected user’s name. As a result, only the fallback text “Select a user to see their tasks.” is displayed initially.
<br>

### Start in [app.component.ts](../src/app/app.component.ts)
