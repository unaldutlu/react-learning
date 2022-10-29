import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Users from "./components/Users";
import Layout from "./components/Layout";
import User from "./components/User";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      {/* <Layout /> */}
      <Routes>
        <Route path='/*' element={<Layout />}>
          <Route path='' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='users/*' element={<Users />}>
            <Route path='user/:id' element={<User />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
