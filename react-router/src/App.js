import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Users from "./components/Users";
import User from "./components/User";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/*' element={<Layout />}>
            <Route path='' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='users/*' element={<Users />}/>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }

export default App;
