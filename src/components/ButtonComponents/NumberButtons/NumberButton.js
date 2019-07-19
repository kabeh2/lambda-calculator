import React, { useEffect } from "react";

const NumberButton = props => {
  const numberBtn = "number-btn-";

  useEffect(() => console.log(props.useDisplayValue));

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
      // onClick={() =>
      //   props.setDisplayValue(() => {
      //     const a = /\.{2,}/.test(props.useDisplayValue.toString());

      //     if (!a && props.useDisplayValue === 0) {
      //       console.log(`hello ${a}`);
      //       return props.value;
      //     } else {
      //       return `${props.useDisplayValue}${props.value}`;
      //     }
      //   })
      // }
      // onClick={() =>
      //   props.setDisplayValue(() => {
      //     switch (props.useDisplayValue) {
      //       case "0":
      //         return props.value;
      //       // case ".":
      //       //   if (props.useDisplayValue.toString().indexOf(".") === -1)
      //       //     return props.value;
      //       default:
      //         return `${props.useDisplayValue}${props.value}`;
      //     }
      //   })
      // }
    >
      {props.value}
    </button>
    // {/* Display a button element rendering the data being passed down from the parent container on props */}
  );
};

export default NumberButton;
