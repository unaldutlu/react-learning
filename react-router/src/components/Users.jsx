import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((item) => setUsers(item.data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <nav>
        <h2>Users</h2>
        {isLoading && <div>Loading...</div>}
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`user/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
        <hr />
      </nav>
      <Outlet />
    </div>
  );
}

export default Users;
