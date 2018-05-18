const events = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT"
};

function reducer(state, action) {
  switch (action.type) {
    case events.INCREMENT:
      return Object.assign({}, state, { count: state.count + 1 });
    case events.DECREMENT:
      return Object.assign({}, state, { count: state.count - 1 });
    default:
      return state;
  }
}

export const dispatch = {
  increment: () => {
    store.dispatch({ type: events.INCREMENT });
  },
  decrement: () => {
    store.dispatch({ type: events.DECREMENT });
  }
};

const store = Redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(Redux.createStore)(reducer, { count: 1 });

export default store;
