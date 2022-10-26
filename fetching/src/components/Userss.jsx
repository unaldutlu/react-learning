import { useEffect, useState } from "react";
import axios from "axios";

function Userss() {
  const [users, setUsers] = useState([]);
  const [isLoading, setISLoading] = useState(true);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((e) => setUsers(e.data))
      .catch((e) => console.log(e))
      .finally(() => setISLoading(false));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {isLoading && <div>Loading...</div>}
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default Userss;
