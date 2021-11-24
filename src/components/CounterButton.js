import React from "react";
import { useState } from "react";


function CounterButton() {
  const [clickAmount, setClickAmount] = useState();
  return(
    <button className="CounterButton">
      You clicked me {clickAmount} of times
    </button>
  )
}

export default CounterButton;