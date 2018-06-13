#### Dispatch actions from dumb components example.

### DEMO:

https://cdn.rawgit.com/looshi/react-dumb-dispatch/master/index.html

#### Goal:

Minimize the boilerplate required to get a reference to the Redux store
`dispatch` function.

#### Reason:

Avoid unnecessary boilerplate if you only need to invoke dispatch.

#### How it works:

This example uses es6 module export / import, and a file structure which
avoids circular dependencies.

#### Alternative ways to reference Redux store.dispatch:

* Use the component context (when using the `<Provider />` component).
* mapDispatchToProps  ( which is just a shorthand for the above ).
* Define a global variable and set it to the `store.dispatch` method.
* Pass `store.dispatch` down as a prop.
* Use the 16.3 Context Provider/Consumer api.
* Are there others ?
