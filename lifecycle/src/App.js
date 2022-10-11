// import { useState, useEffect } from "react";
import Counter from "./components/Counter";
import { useState } from "react";
function App() {
  // const [number, setNumber] = useState(0);
  // const [name, setName] = useState("Unal");

  // useEffect(() => {
  //   console.log("Component mount edildi");
  // }, []);

  // useEffect(() => {
  //   console.log("states güncellendi");
  // }, [name, number]);

  // useEffect(() => {
  //   console.log("name state güncellendi");
  // }, [name]);

  const [IsVisable, setIsVisable] = useState(true);

  return (
    <div>
      {/* <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Buton</button>
      <br />
      <h1>{name}</h1>
      <button onClick={() => setName("Dutlu")}>Buton</button> */}
      {IsVisable && <Counter />}
      <br />
      <button onClick={() => setIsVisable(!IsVisable)}>toggle counter</button>
    </div>
  );
}

export default App;
