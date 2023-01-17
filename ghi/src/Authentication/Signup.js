import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useToken } from "./AuthenticateUser";
import React from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirst] = useState("");
  const [last_name, setLast] = useState("");
  const [zipcode, setZip] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [, , , signup] = useToken();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (formValidation() === false) {
      return;
    }
    signup(first_name, last_name, email, zipcode, password);
    setEmail("");
    setPassword("");
    setFirst("");
    setLast("");
    setZip("");
    setSuccessMessage("Account created successfully!");
    setErrorMessage("");
  };

  function formValidation() {
    let blankInputs = 0;
    if (email.length === 0) {
      blankInputs++;
    }
    if (password.length === 0) {
      blankInputs++;
    }
    if (first_name.length === 0) {
      blankInputs++;
    }
    if (last_name.length === 0) {
      blankInputs++;
    }
    if (zipcode.length === 0) {
      blankInputs++;
    }

    if (blankInputs === 5) {
      setErrorMessage("Form submission is completely blank.");
      setSuccessMessage("");
      return false;
    }
    if (blankInputs > 1) {
      setErrorMessage("Form has multiple blank inputs.");
      setSuccessMessage("");
      return false;
    }

    if (!validateEmail()) {
      setErrorMessage("Whoops! Email format is invalid.");
      setSuccessMessage("");
      return false;
    }
    if (zipcode.length < 5) {
      setErrorMessage("Whoops! Zipcode needs to be at least 5 characters");
      setSuccessMessage("");
      return false;
    }
    if (!password) {
      setErrorMessage("Whoops! Password is required.");
      setSuccessMessage("");
      return false;
    }
    if (!first_name) {
      setErrorMessage("Whoops! First name is required.");
      setSuccessMessage("");
      return false;
    }
    if (!last_name) {
      setErrorMessage("Whoops! Last name is required.");
      setSuccessMessage("");
      return false;
    }
    return true;
  }

  function validateEmail() {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  }

  return (
    <>
      <div className="fixed inset-0 z-50 flex flex-col justify-center items-center">
        <div className="rounded-lg shadow-lg fixed bg-[#F0C797] outline-none w-1/2">
          <div className="justify-between p-7 border-solid rounded-t">
            <a
              href="/"
              className="absolute top-3 right-2.5 text-black bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-[#FEF5ED] hover:text-white ease-linear transition-all duration-150"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fillRule="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <div>
              <h1 className="text-3xl text-center font-bold mb-3">SIGN UP</h1>
            </div>
          </div>
          <form className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-3">
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4 placeholder:text-sm"
              placeholder="First Name"
              onChange={(e) => setFirst(e.target.value)}
              value={first_name}
            />
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4 placeholder:text-sm"
              placeholder="Last Name"
              onChange={(e) => setLast(e.target.value)}
              value={last_name}
            />
            <input
              type="email"
              className="block border border-grey-light w-full p-3 rounded mb-4 placeholder:text-sm"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4 placeholder:text-sm"
              placeholder="Zipcode"
              onChange={(e) => setZip(e.target.value)}
              value={zipcode}
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4 placeholder:text-sm"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {errorMessage ? (
              <div className="flex p-4 mb-4 text-sm text-red-700 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800 items-center">
                <img
                  src={require("../images/warning.png")}
                  width="30px"
                  style={{ marginRight: "15px" }}
                />
                {errorMessage}
              </div>
            ) : successMessage ? (
              <div className="flex p-4 mb-4 text-sm text-green-700 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800 items-center">
                <img
                  src={require("../images/success.png")}
                  width="30px"
                  style={{ marginRight: "15px" }}
                />
                {successMessage}
              </div>
            ) : null}

            <div className="flex flex-col items-center justify-end p-3 border-solid border-slate-200 rounded-b">
              <button
                className="bg-black text-white font-bold uppercase text-sm px-6 py-3 rounded inline-flex group items-center justify-center cursor-pointer"
                type="button"
                onClick={handleFormSubmit}
              >
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-[#F0C797] group-hover:w-32 group-hover:h-24 opacity-10"></span>
                Order up!
              </button>
            </div>
          </form>

          <div className="flex items-center">
            <a
              href="/login"
              className="mb-6 mt-4 mx-auto text-black-500 background-transparent font-bold underline uppercase text-sm focus:outline-none ease-linear transition-all duration-150 hover:text-white content-"
            >
              Already have an account?
            </a>
          </div>
        </div>
      </div>

      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
