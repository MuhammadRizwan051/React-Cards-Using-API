import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../screens/Home";
import Dashboard from "../screens/Dashboard";
import "../App.css";
import Product from "../screens/product";
// import Profile from "../screens/profile";



function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='profile/:id' element={<Profile />} /> */}
            <Route path='dashboard/*' element={<Dashboard />} />
            <Route path="product" element={<Product />} />
        </Routes>
      </Router>
    </>
  );
}

export default AppRouter;
