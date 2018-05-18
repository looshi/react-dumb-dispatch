#### Dispatch actions from dumb components example.

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
* Put the store into a global variable.
* Passing `dispatch` down as a prop.
* Are there others ?
