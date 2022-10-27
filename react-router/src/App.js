import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Users from "./components/Users";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/home' style={{ fontSize: 50, color: "blue" }}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/about' style={{ fontSize: 50, color: "blue" }}>
                About
              </Link>
            </li>
            <li>
              <Link to='/users' style={{ fontSize: 50, color: "blue" }}>
                Users
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
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
