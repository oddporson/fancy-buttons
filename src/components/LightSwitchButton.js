import React from "react";

function LightSwitchButton(props) {
  const {light, setLight} = props
  // console.log(light)
  const LightSwitchButton = () => setLight((light === "on") ? "off" : "on")
  
  return(
    <button className="LightSwitchButton" onClick={LightSwitchButton}>
      {light === "on" && <span><i>💡</i> I'm on!</span>}
      {light === "off" && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
  )
}

export default LightSwitchButton