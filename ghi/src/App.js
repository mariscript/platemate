import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
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
        </Routes>
      </div>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
