import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter - 1)}>ıncrease</button>&nbsp;&nbsp;
      <button onClick={() => setCounter(counter + 1)}>dıcrease</button>
    </div>
  );
}

export default Counter;
