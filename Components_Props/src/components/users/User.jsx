import PropTypes from "prop-types";
// function User(props) {
//   console.log(props);
//   return (
//     <h1>
//       {props.isLoggedIn ? `${props.name} ${props.surName}` : "Giriş yapınız..."}
//       {/* {props.name} {props.surName} ({props.age}) */}
//     </h1>
//   );
// }

function User({ name, surname, age, isLoggedIn, friends, address }) {
  if (!isLoggedIn) {
    return <div>Giriş yapmadınız...</div>;
  }

  return (
    <>
      {/* <h1>
        {isLoggedIn ? `${name} ${surname} (${age})` : "Giriş yapamadınız..."}
      </h1> */}
      <h1>{`${name} ${surname}`}</h1>
      {/* {friends.map((friends, index) => (
        <div key={index}>
          {index}- {friends}
        </div>
      ))} */}
      {friends &&
        friends.map((friends) => (
          <div key={friends.id}>
            {friends.id}- {friends.name}
          </div>
        ))}
      <br />
      {address.title} {address.zip}
    </>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  friends: PropTypes.array,
  address: PropTypes.shape({
    title: PropTypes.string,
    zip: PropTypes.number,
  }),
};

User.defaultProps = {
  name: "Dutlu",
  isLoggedIn: false,
};

export default User;
