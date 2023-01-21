import React from "react";
import { useToken } from "./AuthenticateUser";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirst] = useState("");
  const [last_name, setLast] = useState("");
  const [zipcode, setZip] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [emailExists, setEmailExists] = useState(false);

  const [, , , signup] = useToken();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(false);
    if (formValidation() === false) {
      return;
    }
    signup(first_name, last_name, email, zipcode, password);
    setEmail("");
    setPassword("");
    setFirst("");
    setLast("");
    setZip("");
    setErrorMessage("");
    setIsLoading(true);
    setTimeout(() => {
      setIsSubmit(true);
      setIsLoading(false);
      navigate("me/createneeds");
    }, 3000);
  };

  useEffect(() => {});

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
      return false;
    }
    if (blankInputs > 1) {
      setErrorMessage("Form has multiple blank inputs.");
      return false;
    }

    if (!validateEmail()) {
      setErrorMessage("Whoops! Email format is invalid.");
      return false;
    }
    if (zipcode.length < 5) {
      setErrorMessage("Whoops! Zipcode needs to be at least 5 characters");
      return false;
    }
    if (!password) {
      setErrorMessage("Whoops! Password is required.");
      return false;
    }
    if (!first_name) {
      setErrorMessage("Whoops! First name is required.");
      return false;
    }
    if (!last_name) {
      setErrorMessage("Whoops! Last name is required.");
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
      {!isSubmit ? (
        <div
          className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="signup"
          tabIndex="-1"
          aria-labelledby="signupLabel"
          aria-modal="true"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-[#F0C797] bg-clip-padding rounded-md outline-none text-current">
              <div className="modal-header p-6 mt-2 text-center">
                <div className="flex justify-center items-center">
                  <h1 className="text-3xl font-bold mr-4">SIGN UP</h1>
                  <img src={require("../images/checklist.png")} width="50px" />
                </div>
                <svg
                  className="w-9 h-9 absolute top-3 right-2.5 text-black bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-[#FEF5ED] hover:text-white ease-linear transition-all duration-150 cursor-pointer"
                  fillRule="currentColor"
                  data-bs-dismiss="modal"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="modal-body relative p-4">
                <form
                  onSubmit={handleFormSubmit}
                  className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-3"
                >
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
                  ) : null}

                  {isLoading ? (
                    <div className="flex flex-col items-center">
                      <div className="flex justify-center items-center">
                        <img
                          src={require("../images/pizza.gif")}
                          alt="Loading..."
                          className="w-12 h-30"
                        />
                      </div>
                      <div className="text-center mt-3">
                        <h1 className="font-bold">Making your plate now...</h1>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-end p-3 border-solid border-slate-200 rounded-b">
                      <button
                        className="bg-black text-white font-bold uppercase text-sm px-6 py-3 rounded inline-flex group items-center justify-center cursor-pointer"
                        type="submit"
                      >
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-[#F0C797] group-hover:w-32 group-hover:h-24 opacity-10"></span>
                        Order up!
                      </button>
                      <div className="flex items-center">
                        <a
                          data-bs-toggle="modal"
                          data-bs-target="#login"
                          className="mb-6 mt-4 mx-auto text-black-500 background-transparent font-bold underline uppercase text-sm focus:outline-none ease-linear transition-all duration-150 hover:text-white cursor-pointer"
                        >
                          Already have an account?
                        </a>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="signup"
          tabIndex="-1"
          aria-labelledby="signupLabel"
          aria-modal="true"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-[#F6F5FA] bg-clip-padding rounded-md outline-none text-current">
              <div className="modal-header p-6 mt-2 text-center">
                <div className="flex justify-center items-center">
                  <img
                    src={require("../images/pear.gif")}
                    width="250px"
                    className="mx-auto"
                  />

                  <h1 className="text-lg font-bold mr-4 mt-6">
                    <img
                      src={require("../images/success.png")}
                      width="50px"
                      className="mx-auto -mt-10 mb-5"
                    />
                    You are all signed up! Happy plating!
                  </h1>
                </div>
                <h1 className="text-sm mt-5">You may now close this window.</h1>
                <svg
                  className="w-9 h-9 absolute top-3 right-2.5 text-black bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-[#ddd3ca] hover:text-white ease-linear transition-all duration-150 cursor-pointer"
                  fillRule="currentColor"
                  data-bs-dismiss="modal"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
