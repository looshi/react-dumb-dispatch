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
    return React.createElement(DumbComponent, store.getState(), null);
  }
}

const app = React.createElement(App, { store: store }, null);
ReactDOM.render(app, document.querySelector("body"));
