import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
import Dashboard from "../screens/Dashboard";
import "../App.css";


function AppRouter(props) {
  return (
    <>
      <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='dashboard/*' element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default AppRouter;
