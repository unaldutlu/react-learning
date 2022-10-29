import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function User() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((data) => setUser(data.data))
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <div>
      <h1>User</h1>
      {isLoading && <div>Loading...</div>}
      {!isLoading && <code>{JSON.stringify(user)}</code>}
      <br />
      {parseInt(id) < 10 ? (
        <Link to={`/users/user/${parseInt(id) + 1}`}>
          Next User {parseInt(id) + 1}
        </Link>
      ) : (
        <Link to={`/users/user/${1}`}> Turn Head </Link>
      )}
      <hr />
    </div>
  );
}

export default User;
