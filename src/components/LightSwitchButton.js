import React from "react";
import { useState } from "react";


function LightSwitchButton() {
  const [light, setLight] = useState('off');

  const switchLight = () => setLight((light === "on") ? "off" : "on")
  return(
    <button className="LightSwitchButton" onClick={switchLight}>
      {light === "on" && <span><i>💡</i> I'm on!</span>}
      {light === "off" && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
  )
}

export default LightSwitchButton