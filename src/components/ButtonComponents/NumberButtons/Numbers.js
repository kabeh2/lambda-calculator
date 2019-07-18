import React, { useState } from "react";

//import any components needed
import { numbers } from "../../../data";
import NumberButton from "./NumberButton";

//Import your array data to from the provided data file

const Numbers = props => {
  // STEP 2 - add the imported data to state
  const [useNumber, setNumber] = useState(numbers);
  // console.log(useNumber);

  const addDecimal = num => {
    // if there is a decimal in the display value do not add decimal
    // if there isnt add a decimal place

    if (props.useDisplayValue.indexOf(".") === -1) {
      props.setDisplayValue(props.useDisplayValue + num);
    }
  };

  return (
    <div className="buttonArea-3">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

      {useNumber.map((num, index) => (
        <NumberButton
          key={index}
          id={index}
          value={num}
          handleDecimal={num => addDecimal(num)}
          useDisplayValue={props.useDisplayValue}
          setDisplayValue={props.setDisplayValue}
        />
      ))}
    </div>
  );
};

export default Numbers;
