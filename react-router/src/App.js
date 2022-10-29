import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Users from "./components/Users";
import Layout from "./components/Layout";
import User from "./components/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Layout />}>
          <Route path='' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='users/*' element={<Users />}>
            <Route path='user/:id' element={<User />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
