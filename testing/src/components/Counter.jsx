import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter - 1)}>Increase</button>&nbsp;&nbsp;
      <button onClick={() => setCounter(counter + 1)}>Decrease</button>
    </div>
  );
}

export default Counter;
