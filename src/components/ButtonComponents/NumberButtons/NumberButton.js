import React from "react";

const NumberButton = props => {
  const numberBtn = "number-btn-";
  return (
    <button
      value={props.value}
      className={numberBtn.concat(props.id)}
      onClick={() =>
        props.setDisplayValue(
          props.useDisplayValue === 0
            ? props.value
            : `${props.useDisplayValue}${props.value}`
        )
      }
    >
      {props.value}
    </button>
    // {/* Display a button element rendering the data being passed down from the parent container on props */}
  );
};

export default NumberButton;
