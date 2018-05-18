import { dispatch } from "./store.js";

const DumbComponent = props => {
  return React.createElement("div", null, [
    React.createElement("h1", null, `Count: ${props.count}`),
    React.createElement(
      "button",
      {
        onClick: () => {
          dispatch.increment({ count: props.count + 1 });
        }
      },
      "Increment"
    ),
    React.createElement(
      "button",
      {
        onClick: () => {
          dispatch.decrement({ count: props.count - 2 });
        }
      },
      "Decrement"
    ),
    React.createElement("h1", null, `Selected Item: ${props.item}`),
    React.createElement(
      "select",
      {
        onChange: function(e) {
          dispatch.selected({ item: e.target.value });
        },
        value: props.item
      },
      [
        React.createElement(
          "option",
          {
            label: "dog",
            selected: false,
            value: "dog"
          },
          "dog"
        ),
        React.createElement(
          "option",
          {
            label: "cat",
            selected: false,
            value: "cat"
          },
          "cat"
        )
      ]
    )
  ]);
};

export default DumbComponent;
