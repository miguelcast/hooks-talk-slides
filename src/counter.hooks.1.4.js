import React, { useState } from "react";
import "./styles.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  
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