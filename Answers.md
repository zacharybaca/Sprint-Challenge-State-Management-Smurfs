1. What problem does the context API help solve?

/**Answer: Context API helps solve the problem of prop drilling. Specifically, if you keep passing props down from a single component constantly, using Context will help you out in managing your state.**/

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

/**Answer: Actions: Actions in Redux are functions or events that do something with your code. These functions are predictable, so you will know what will happen in your app.

            Reducers: Reducers are also functions in Redux that have switch cases attached to them. These cases call certain Action creators, or functions, depending on the case or state of your application code.

            Store: Basically, the Redux store is something that holds your entire App state. You are still allowed to have local state within a component, such as forms, but the store will hold your main data that will be used in your application.**/

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

/**Answer: Application state is state that is used throughout your entire application. It is state that is used by multiple components in your application. Component state is local state to a specific component. It would be a good idea to use Component state in a form component or a functional component that is just rendering some unique piece of UI.**/

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

/**Answer: Redux-Thunk is MiddleWare that allows us to acquire data from an external API and use that data within our application. It changes our action-creators by dispatching certain calls depending on the status we get back from the API server. An example of this would be, if we cannot retrieve the data from the API, or the server is down, we will get an error message stating that we weren't able to get the data from the server.**/

1. What is your favorite state management system you've learned and this sprint? Please explain why!

/**Answer: My favorite state management system that I have learned from this unit is Context. I like it because it is fairly quick to setup and much easier to understand than Redux. I would prefer to use Context of Redux anyday.**/
