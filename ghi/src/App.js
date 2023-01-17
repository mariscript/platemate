import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import About from "./Footer/About";
import Footer from "./Footer/Footer";
import Resources from "./Footer/Resources";
import Nav from "./Nav";
import Signup from "./Authentication/Signup";
import Login from "./Authentication/Login";
import RestaurantDetail from "./Restaurant/RestaurantDetail";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detail" element={<RestaurantDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
