import React, { useState } from "react";
import "./Logic.css";

const Logic = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="count-container">
      <h1>Count: {count}</h1>
      <br />
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
};

export default Logic;
