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
import RestaurantList from "./Restaurant/RestaurantList";
import RestaurantDetailTest from "./Restaurant/RestaurantDetailTest";
import { AuthProvider, useToken } from "./Authentication/AuthenticateUser";
import QuestionModal from "./Questionnaire/QuestionnaireModal";
import UserProfile from "./User/UserProfile";
import UpdateAccountInfo from "./User/UpdateAccountInfo";
import CreateDietaryNeeds from "./User/CreateDietaryNeeds";
import UpdateDietaryNeeds from "./User/UpdateDietaryNeeds";
import { useState } from "react";

function GetToken() {
  useToken();
  return null;
}

export default function App() {
  const [refresh, setRefresh] = useState(false);
  setTimeout(() => {
    setRefresh(false);
  }, 10000);
  return (
    <AuthProvider>
      <BrowserRouter>
        <GetToken />
        <Signup />
        <Login />
        <Nav />
        <div>
          <Routes>
            <Route
              path="/"
              element={[
                <QuestionModal refresh={refresh} setRefresh={setRefresh} />,
                <MainPage />,
              ]}
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route
              path="/restaurants"
              element={[
                <QuestionModal
                  refresh={refresh}
                  setRefresh={setRefresh}
                  key="0"
                />,
                <RestaurantList refresh={refresh} key="1" />,
              ]}
            />
            <Route path="/restaurant" element={<RestaurantDetailTest />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            <Route
              path="/me"
              element={[
                <QuestionModal
                  refresh={refresh}
                  setRefresh={setRefresh}
                  key="2"
                />,
                <UserProfile key="3" />,
              ]}
            />
            <Route
              path="/questionnaire"
              element={
                <QuestionModal refresh={refresh} setRefresh={setRefresh} />
              }
            />
            <Route path="/logout" element={<Logout />} />
            <Route path="me">
              <Route path="updateaccount" element={<UpdateAccountInfo />} />
              <Route path="updateneeds" element={<UpdateDietaryNeeds />} />
              <Route path="createneeds" element={<CreateDietaryNeeds />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}
