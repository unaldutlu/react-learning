// function User(props) {
//   console.log(props);
//   return (
//     <h1>
//       {props.isLoggedIn ? `${props.name} ${props.surName}` : "Giriş yapınız..."}
//       {/* {props.name} {props.surName} ({props.age}) */}
//     </h1>
//   );
// }

function User({ name, surname, age, isLoggedIn }) {
  return (
    <h1>unal</h1>
    <h1>{isLoggedIn ? `${name} ${surname} ${age}` : "Giriş yapamadınız..."}</h1>
  );
}

export default User;
