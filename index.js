import store from "./store.js";
import DumbComponent from "./dumb-component.js";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe;
  }

  render() {
    return React.createElement(
      DumbComponent,
      { count: store.getState().count },
      null
    );
  }
}

const app = React.createElement(App, { store: store }, null);
ReactDOM.render(app, document.querySelector("body"));
