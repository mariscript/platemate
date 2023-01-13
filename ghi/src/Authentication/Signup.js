import { useState } from "react";
import React from "react";

export default function Signup() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [first_name, setFirst] = useState(null);
  const [last_name, setLast] = useState(null);
  const [zipcode, setZip] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (formValidation() === false) {
      return;
    }
    const signupUrl = "http://localhost:8000/api/accounts";
    const fetchConfig = {
      method: "POST",
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        zipcode,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(signupUrl, fetchConfig);
    if (response.ok) {
      setEmail("");
      setPassword("");
      setFirst("");
      setLast("");
      setZip("");
      setSuccessMessage("Account created successfully!");
      setErrorMessage("");
    } else {
      setErrorMessage("Could not create account. Please try again!");
    }
  };

  function formValidation() {
    if (!email || !password || !first_name || !last_name || !zipcode) {
      setErrorMessage("Could not create account. Please try again!");
      setSuccessMessage("");
      return false;
    }
    if (!validateEmail()) {
      setErrorMessage("Invalid email, please try again!");
      setSuccessMessage("");
      return false;
    }
    if (zipcode.length < 5) {
      setErrorMessage("Invalid zipcode, please try again!");
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
            <div className="text-red-600 font-bold text-center">
              {errorMessage}
            </div>
            <div className="text-green-600 font-bold text-center">
              {successMessage}
            </div>
          </div>
          <form className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-4">
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
