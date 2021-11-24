import React from "react";
import { useState } from "react";


function LightSwitchButton() {
  const [light, setLight] = useState();
  return(
    <button className="LightSwitchButton">
      {light === "on" && <span><i>💡</i> I'm on!</span>}
      {light === "off" && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
  )
}

export default LightSwitchButton