import React from "react";
import { useState } from "react";


function CounterButton() {
  const [clickAmount, setClickAmount] = useState(0);

  const counterButton = () => {(setClickAmount(clickAmount+1))
  }
  return(
    <button className="CounterButton" onClick={counterButton}>
      You clicked me {clickAmount} of times
    </button>
  )
}

export default CounterButton;