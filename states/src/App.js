import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Dutlu");
  const [age, setAge] = useState(29);
  const [friends, setFriends] = useState(["Unal", "Dutlu"]);
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
    </div>
  );
}

export default App;
