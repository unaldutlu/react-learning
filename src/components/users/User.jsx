// function User(props) {
//   console.log(props);
//   return (
//     <h1>
//       {props.isLoggedIn ? `${props.name} ${props.surName}` : "Giriş yapınız..."}
//       {/* {props.name} {props.surName} ({props.age}) */}
//     </h1>
//   );
// }

function User({ name, surname, age, isLoggedIn, friends }) {
  return (
    <>
      <h1>
        {isLoggedIn ? `${name} ${surname} (${age})` : "Giriş yapamadınız..."}
      </h1>
      {/* {friends.map((friends, index) => (
        <div key={index}>
          {index}- {friends}
        </div>
      ))} */}
      {friends.map((friends) => (
        <div key={friends.id}>
          {friends.id}- {friends.name}
        </div>
      ))}
    </>
  );
}

export default User;
