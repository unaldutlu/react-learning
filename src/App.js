// import React from "react";
import Header from "./components/headers/Header.jsx";
import "./App.css";
// import User from "./components/users/User";

// const name = "Unal";
// const surname = "Dutlu";
// const isLoggedIn = true;

function App() {
  return (
    // <React.Fragment>
    //   <h1>Hello React</h1>
      <Header />
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
    // ! props

    // <>
    //   <User name='Unal' surname='Dutlu' age={30} isLoggedIn={true} />
    // </>
  );
}

export default App;
