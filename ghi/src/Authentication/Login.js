import { useState } from "react";
import { useToken } from "./AuthenticateUser";
import { useNavigate } from "react-router-dom";

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, login] = useToken();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (loginValidation() === false) {
      return;
    }
    login(email, password);
    setEmail("");
    setPassword("");
    navigate("/");
    // error handle for if not a valid account
  };

  function loginValidation() {
    if (email.length === 0) {
      setErrorMessage("Whoops! Email is required.");
    }
    if (password.length === 0) {
      setErrorMessage("Whoops! Password is required.");
    }
  }

  return (
    <>
      <div className="">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalCenter"
        >
          Vertically centered modal
        </button>
      </div>
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModalCenter"
        tabIndex="-1"
        aria-labelledby="exampleModalCenterTitle"
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-[#F0C797] bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header p-6 mt-2 text-center">
              <div className="flex justify-center items-center">
                <h1 className="text-3xl font-bold mr-2">LOGIN</h1>
                <img src={require("../images/lock.png")} width="40px" />
              </div>
              {/* <a
                href="/"
                className="absolute top-3 right-2.5 text-black bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-[#FEF5ED] hover:text-white ease-linear transition-all duration-150"
              > */}
              <svg
                className="cursor-pointer w-9 h-9 absolute top-3 right-2.5 text-black bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-[#FEF5ED] hover:text-white ease-linear transition-all duration-150"
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
              {/* </a> */}
            </div>
            <div className="modal-body relative p-4">
              <form
                className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-3"
                onSubmit={handleFormSubmit}
              >
                <input
                  className="block border border-grey-light w-full p-3 rounded mb-4 placeholder:text-sm"
                  placeholder="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <input
                  className="block border border-grey-light w-full p-3 rounded mb-4 placeholder:text-sm"
                  placeholder="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <button>Order Up!</button>
              </form>
              <div className="flex items-center">
                <a
                  href="/signup"
                  className="mb-6 mt-4 mx-auto text-black-500 background-transparent font-bold underline uppercase text-sm focus:outline-none ease-linear transition-all duration-150 hover:text-white content-"
                >
                  Don't have an account?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
