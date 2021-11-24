import React from "react";
import { useState } from "react";



function AngryButton() {
  const [anger, setAnger] = useState(0);
  return (
    <button style={{ backgroundColor: `rgba(255,0,0,${anger})` }} className="AngryButton">
      {anger < 1 && <span>Don't click me too much! </span>}
      {anger > 0 && <span>Rawr!</span>}
  </button>
  )
}

export default AngryButton;