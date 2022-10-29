import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((item) => setUsers(item.data))
      .catch((e) => console.log(e))
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
              <NavLink
                style={({ isActive }) => ({ color: isActive ? "red" : "pink" })}
                to={`user/${user.id}`}
              >
                {user.name}
              </NavLink>
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
