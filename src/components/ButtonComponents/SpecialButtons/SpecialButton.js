import React from "react";
import * as Math from "mathjs";

const SpecialButton = props => {
  const specialBtn = "special-btn-";
  // console.log(props.id);
  return (
    //{/* Display a button element rendering the data being passed down from the parent container on props */}
    <button
      className={specialBtn.concat(props.id)}
      onClick={() => {
        switch (props.value) {
          case "C":
            return props.setDisplayValue(0);
          case "+/-":
            return props.setDisplayValue(
              Math.evaluate(props.useDisplayValue * -1)
            );
          case "%":
            return props.setDisplayValue(
              Math.evaluate(props.useDisplayValue / 100)
            );
          default:
            return props.useDisplayValue;
        }
      }}
    >
      {props.value}
    </button>
  );
};

export default SpecialButton;
