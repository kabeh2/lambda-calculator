import React, { useState } from "react";

//import any components needed
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";

//Import your array data to from the provided data file

const Specials = props => {
  // STEP 2 - add the imported data to state
  const [useSpecials, setUseSpecials] = useState(specials);

  return (
    <div className="buttonArea-1">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

      {useSpecials.map((specials, index) => {
        return (
          <SpecialButton
            key={index}
            id={index}
            value={specials}
            useDisplayValue={props.useDisplayValue}
            setDisplayValue={props.setDisplayValue}
          />
        );
      })}
    </div>
  );
};

export default Specials;
