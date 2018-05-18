const actions = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  SELECTED: "SELECTED"
};
// see below
export const dispatch = mapActionsToDispatch(actions);

function reducer(state, action) {
  switch (action.type) {
    case actions.INCREMENT:
      return Object.assign({}, state, { count: action.payload.count });
    case actions.DECREMENT:
      return Object.assign({}, state, { count: action.payload.count });
    case actions.SELECTED:
      return Object.assign({}, state, { item: action.payload.item });
    default:
      return state;
  }
}

const store = Redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(Redux.createStore)(reducer, { count: 1, item: "cat" });
export default store;

/*
mapActionsToDispatch
Creates an object with a function for each action.
For example:
 {
  increment: (payload)=>{type: "INCREMENT", payload: payload },
  decrement: (payload)=>{type: "DECREMENT", payload: payload },
  ....
}
use it like this:
import { dispatch } from './store.js';
dispatch.increment({ count: 1 });
*/
function mapActionsToDispatch(actions) {
  return Object.keys(actions).reduce(function(acc, val) {
    return Object.assign(acc, {
      [val.toLowerCase()]: payload => {
        // clone the payload here ?
        const action = { type: val, payload };
        console.info(action);
        store.dispatch(action);
      }
    });
  }, {});
}
