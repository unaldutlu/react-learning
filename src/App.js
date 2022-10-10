// import React from "react";
// import Header from "./components/headers/Header.jsx";v
import "./App.css";
import User from "./components/users/User";

// const name = "Unal";
// const surname = "Dutlu";
// const isLoggedIn = true;
const friends = [
  {
    id: 1,
    name: "Ahmet",
  },
  {
    id: 2,
    name: "Mehmet",
  },
  {
    id: 3,
    name: "Unal",
  },
];



function App() {
  return (
    // ! props
    <>
      <User
        name='Unal'
        surname='Dutlu'
        age={30}
        isLoggedIn={true}
        // friends={["Ahmet", "Mehmet", "Unal"]}
        friends={friends}
        address={{
          title: "Ankara",
          zip: 1881,
        }}
      />
    </>
    // ! *******---------------**************
    // <React.Fragment>
    //   <h1>Hello React</h1>
    //   <Header />
    //   <p className='jsx'>Lorem ipsum</p>
    //   <label htmlFor='myinput'>Name</label>
    //   <input id='myinput'></input>
    // </React.Fragment>
    // ! *******---------------**************
    // <>
    //   <h1>{name}</h1>
    //   <h1>{surname}</h1>
    //   <h2>{`benim adım ${name}, soyadım ${surname}`}</h2>
    // </>
    // ! *************-----------************
    // <>
    //   {/* <h1>{isLoggedIn && `benim adım ${name}, soyadım ${surname}`}</h1>
    //   <h1>{!isLoggedIn && `Giriş yapmadınız...`}</h1> */}

    //   {/* <h1>
    //     {isLoggedIn
    //       ? `benim adım ${name}, soyadım ${surname}`
    //       : `Giriş yapmadınız...`}
    //   </h1> */}
    // </>
    // ! ******************------------************
  );
}

export default App;
