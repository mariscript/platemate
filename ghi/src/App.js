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
<<<<<<< HEAD
import Questionnaire from "./Questionnaire/Questionnaire";
import RestaurantList from "./Restaurant/RestaurantList";
import RestaurantDetailTest from "./Restaurant/RestaurantDetailTest";
import { AuthProvider, useToken } from "./Authentication/AuthenticateUser";
=======
import RestaurantList from "./Restaurant/RestaurantList";
import RestaurantDetailTest from "./Restaurant/RestaurantDetailTest";
import { AuthProvider, useToken } from "./Authentication/AuthenticateUser";
import QuestionModal from "./Questionnaire/QuestionnaireModal";
>>>>>>> main
import UserProfile from "./User/UserProfile";
import UpdateAccountInfo from "./User/UpdateAccountInfo";
import UpdateAllergies from "./User/UpdateAllergies";
import UpdateDietRestrict from "./User/UpdateDietRestrict";

function GetToken() {
  // Get token from JWT cookie (if already logged in)
  useToken();
  return null;
}

function App() {
  return (
    <AuthProvider>
<<<<<<< HEAD
      <BrowserRouter>
        <GetToken />
        <Nav />
        <div className="">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/questionnaire" element={<Questionnaire />} />
            <Route path="/restaurants" element={<RestaurantList />} />
            <Route path="/restaurant" element={<RestaurantDetailTest />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/me" element={<UserProfile />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
=======
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
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/me" element={<UserProfile/>}/>
          <Route path="/questionnaire" element={<QuestionModal/>}/>
          <Route path="me">
            <Route path="updateaccount" element={<UpdateAccountInfo/>}/>
            <Route path="updateallergy" element={<UpdateAllergies/>}/>
            {/* <Route path="updatediet" element={<UpdateDietRestrict/>}/> */}
          </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
>>>>>>> main
    </AuthProvider>
  );
}

export default App;
