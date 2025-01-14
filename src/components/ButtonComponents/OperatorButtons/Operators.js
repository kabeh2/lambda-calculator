import React, { useState } from "react";

//import any components needed

import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";

//Import your array data to from the provided data file

const Operators = props => {
  // STEP 2 - add the imported data to state
  const [useOperators, setOperators] = useState(operators);

  return (
    <div className="buttonArea-2">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

      {Object.keys(useOperators).map((keyName, index) => (
        <OperatorButton
          key={index}
          value={useOperators[keyName].value}
          char={useOperators[keyName].char}
          useDisplayValue={props.useDisplayValue}
          setDisplayValue={props.setDisplayValue}
        />
      ))}
    </div>
  );
};

export default Operators;
