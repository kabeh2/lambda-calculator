import React from "react";
import * as Math from "mathjs";

const OperatorButton = props => {
  return (
    <button
      onClick={() => {
        switch (props.value) {
          case "=":
            return props.setDisplayValue(Math.evaluate(props.useDisplayValue));
          default:
            return props.setDisplayValue(
              `${props.useDisplayValue}${props.value}`
            );
        }
      }}
    >
      {props.char}
    </button>
    //  {/* Display a button element rendering the data being passed down from the parent container on props */}
  );
};

export default OperatorButton;
