import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [name, setName] = useState("Dutlu");
  const [age, setAge] = useState(29);
  const [friends, setFriends] = useState(["Unal", "Dutlu"]);
  const [address, setAddress] = useState({ title: "Ankara", zip: 4444 });

  return (
    <div>
      <h1>Merhaba {name}!</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Unal")}>Name</button>
      <button onClick={() => setAge(30)}>Age</button>
      <hr />
      <h2>Friends</h2>
      {friends.map((friends, index) => (
        <div key={index}>{friends}</div>
      ))}
      <br />
      <button onClick={() => setFriends([...friends, "Mutlu"])}>
        add new friend
      </button>
      <hr />
      <h1>Address</h1>
      <div>
        {address.title} {address.zip}
      </div>
      <br />
      <button onClick={() => setAddress({ ...address, zip: 1881 })}>
        change the address
      </button>
      <hr />
      <Counter />
    </div>
  );
}

export default App;
