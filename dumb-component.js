import { dispatch } from "./store.js";

const DumbComponent = props => {
  return React.createElement("div", null, [
    React.createElement("button", { onClick: dispatch.increment }, "Increment"),
    React.createElement("button", { onClick: dispatch.decrement }, "Decrement"),
    React.createElement("h1", null, `${props.count}`)
  ]);
};

export default DumbComponent;
