import React from "react";
import { useState } from "react";



function AngryButton() {
  const [anger, setAnger] = useState(0);
  const handleClick = () => { 
    if (anger < 1) {
      setAnger(anger + 0.1)
    } else {
      setAnger(0);
    }
  }
  return (
    <button style={{ backgroundColor: `rgba(255,0,0,${anger})` }} className="AngryButton" onClick={handleClick}>
      {anger < 1 && <span>Don't click me too much! </span>}
      {anger > 0 && <span>Rawr!</span>}
  </button>
  )
}

export default AngryButton;