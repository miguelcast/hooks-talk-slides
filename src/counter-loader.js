import React from "react";

const load = require.context("./", true, /counter\..*js$/);

export default function CounterLoader({
  version = "1.1"
}) {
  const Counter = load("./counter." + version + ".js")
    .default;

  if (typeof window == `undefined`) {
    return null;
  }
  console.log(Counter)
  return (
    <div
      style={{
        height: "200px",
        width: "90%",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "6px",
        background: "white",
        color: "#3A3A3A"
      }}
    >
      <Counter/>
    </div>
  );
}