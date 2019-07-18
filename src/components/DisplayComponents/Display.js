import React from "react";

export const Display = props => {
  return (
    <div className="display">
      {/* Display any props data here */}
      <h1>{props.displayValue}</h1>
    </div>
  );
};
