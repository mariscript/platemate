import React, { useState, useEffect } from "react";
import { useAuthContext, useToken } from "../Authentication/AuthenticateUser";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFish,
  faBreadSlice,
  faLeaf,
  faCarrot,
  faBowlFood,
  faLocationDot,
  faEnvelope,
  faUser,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";

export default function UpdateAccountInfo() {
  const [account, setAccount] = useState({});
  const [email, setEmail] = useState("");
  const [first_name, setFirst] = useState("");
  const [last_name, setLast] = useState("");
  const [zipcode, setZip] = useState("");
  const [, , , , update] = useToken();
  const [cancelEdit, setCancelEdit] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();
  const { token } = useAuthContext();

  const fetchAccount = async () => {
    const url = `${process.env.REACT_APP_PLATEMATE_API_HOST}/api/accounts/me/`;
    const result = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await result.json();
    setAccount(data);
    setFirst(data.first_name);
    setLast(data.last_name);
    setEmail(data.email);
    setZip(data.zipcode);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (formValidation() === false) {
      return;
    }
    update(first_name, last_name, email, zipcode);
    setEmail("");
    setFirst("");
    setLast("");
    setZip("");
    navigate("/me");
  };

  const handleCancelEdit = () => {
    setCancelEdit(!cancelEdit);
    navigate("/me");
  };

  useEffect(() => {
    if (token) {
      fetchAccount();
    }
  }, [token]);

  function formValidation() {
    let blankInputs = 0;
    if (email.length === 0) {
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
    if (blankInputs > 1) {
      setErrorMessage("Form has multiple blank inputs.");
      return false;
    }
    if (first_name.length < 1) {
      setErrorMessage("Whoops! You erased your first name!");
      return false;
    }
    if (last_name.length < 1) {
      setErrorMessage("Whoops! You erased your last name!");
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
    return true;
  }

  function validateEmail() {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  }

  if (account || account !== undefined) {
    return (
      <div>
        <h2 className="max-w-screen-sm mx-auto font-bold mt-12 text-xl">
          Edit Account Details{" "}
        </h2>

        <div className="bg-[#EEE5DD] rounded-lg p-10 max-w-screen-sm mx-auto mb-24">
          <div className="mr-10 ml-10">
            <form onSubmit={handleFormSubmit}>
              <h1 className="font-bold mb-2 text-lg">
                <FontAwesomeIcon icon={faUserCircle} className="mr-2" />
                First Name{" "}
              </h1>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4 placeholder:text-sm"
                placeholder="First Name"
                defaultValue={account?.first_name}
                onChange={(e) => setFirst(e.target.value)}
              />
              <h1 className="font-bold mb-2 text-lg">
                <FontAwesomeIcon icon={faCircleUser} className="mr-2" />
                Last Name{" "}
              </h1>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4 placeholder:text-sm"
                placeholder="Last Name"
                onChange={(e) => setLast(e.target.value)}
                defaultValue={account?.last_name}
              />
              <h1 className="font-bold mb-2 text-lg">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                Email
              </h1>
              <input
                placeholder="Email"
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4 placeholder:text-sm"
                defaultValue={account?.email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <h1 className="font-bold mb-2 text-lg">
                <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                Zipcode{" "}
              </h1>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4 placeholder:text-sm"
                placeholder="Zipcode"
                onChange={(e) => setZip(e.target.value)}
                defaultValue={account?.zipcode}
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
              <div className="p-2 flex">
                <button
                  className="font-bold ml-0 flex p-2.5 bg-[#BB5855] rounded-xl hover:rounded-3xl hover:bg-[#823e3d] transition-all duration-300 text-black"
                  type="submit"
                  onClick={handleCancelEdit}
                >
                  Cancel
                </button>
                <button
                  className="font-bold ml-auto flex p-2.5 bg-[#97D06B] rounded-xl hover:rounded-3xl hover:bg-[#6a934c] transition-all duration-300 text-black"
                  type="submit"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
