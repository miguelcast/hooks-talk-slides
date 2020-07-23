import React from "react";
import "./styles.css";

export default function Counter() {
  const count = 0;
  const setCount = "";
  
  function handleClick(){
    setCount(count + 1)
  }

  return(
    <div className="counter-wrapper">
      <p>{`You have clicked ${count} times`}</p>
      <button onClick={handleClick}>
        Click
      </button>
    </div>
  )
}