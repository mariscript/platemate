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
import Logout from "./Authentication/Logout";
import RestaurantList from "./Restaurant/RestaurantList"
import RestaurantDetailTest from "./Restaurant/RestaurantDetailTest";
import { AuthProvider, useToken } from "./Authentication/AuthenticateUser"

function GetToken() {
  // Get token from JWT cookie (if already logged in)
  useToken();
  return null
}
import RestaurantDetail from "./Restaurant/RestaurantDetail";

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <GetToken/>
      <Nav/>
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/restaurants" element={<RestaurantList />}/>
          <Route path="/restaurant" element={<RestaurantDetailTest />}/>
          <Route path="/detail" element={<RestaurantDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
