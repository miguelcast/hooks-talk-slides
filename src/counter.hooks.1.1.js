import React from "react";
import "./styles.css";

export default function Counter() {
  const count = 0;

  return(
    <div className="counter-wrapper">
      <p>{`You have clicked ${count} times`}</p>
      <button>
        Click
      </button>
    </div>
  )
}