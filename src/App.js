import React from "react";
import "./App.css";
import Header from "./components/headers/Header.jsx";

function App() {
  return (
    // <div>
    <React.Fragment>
      <h1>Hello React</h1>
      <Header />
      <p className='jsx'>Lorem ipsum</p>
      <label htmlFor='myinput'>Name</label>
      <input id='myinput'></input>
    </React.Fragment>
    // </div>
  );
}

export default App;
