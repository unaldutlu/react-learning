import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const Decrease = () => {
    setCount(count - 1);
  };
  const Increase = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={Decrease}>Decrease</button>
      <button onClick={Increase}>Increase</button>
    </>
  );
}

export default Counter;
