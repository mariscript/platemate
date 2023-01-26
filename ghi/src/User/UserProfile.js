import React, { useState, useEffect } from "react";
import { useAuthContext } from "../Authentication/AuthenticateUser";
import { storeUser } from "../store/userSlice";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFish,
  faBreadSlice,
  faLeaf,
  faCarrot,
  faBowlFood,
  faLocationDot,
  faEnvelope,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { storeDietNeeds } from "../store/dietNeedsSlice";

export default function UserProfile() {
  const [account, setAccount] = useState({});
  const [allergy, setAllergy] = useState({});
  const [diet_restrict, setDiet] = useState({});
  const { token } = useAuthContext();
  const dispatch = useDispatch();

  const fetchAccount = async () => {
    const url = `${process.env.REACT_APP_PLATEMATE_API_HOST}/api/accounts/me/`;
    const result = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await result.json();
    setAccount(data);
  };

  const updateState = () => {
    dispatch(storeUser({ account }));
    dispatch(storeDietNeeds({ allergy, diet_restrict }));
  };

  const fetchAllergies = async () => {
    const url = `${process.env.REACT_APP_PLATEMATE_API_HOST}/api/allergies/me/`;
    const result = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await result.json();
    setAllergy(data);
  };

  const fetchDietRestrict = async () => {
    const url = `${process.env.REACT_APP_PLATEMATE_API_HOST}/api/diet_restricts/me/`;
    const result = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await result.json();
    setDiet(data);
  };

  useEffect(() => {
    if (token) {
      fetchAccount();
      fetchAllergies();
      fetchDietRestrict();
    }
  }, [token]);

  useEffect(() => {
    updateState();
  }, [allergy, diet_restrict]);

  if (account || account !== undefined) {
    return (
      <>
        <div className="flex justify-center mt-10 mb-5">
          <button
            type="button"
            className="inline-block px-10 py-6 bg-[#C26866] text-white font-medium text-xl leading-tight uppercase rounded-full shadow-md hover:bg-[#FDECA9] hover:shadow-lg hover:text-black focus:bg-[#C26866] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#C26866] active:shadow-lg transition duration-150 ease-in-out"
            data-bs-toggle="modal"
            data-bs-target="#questionnaire"
          >
            <span className="inline-block font-bold">
              Take The Questionnaire!
            </span>
            <img
              src={require("../images/form.png")}
              alt="Loading..."
              className="inline-block w-9 ml-2"
            />
          </button>
        </div>
        <img
          src={require("../images/profile.png")}
          width="70px"
          className="mx-auto mt-10"
        />
        <h1 className="text-center font-md mt-7 text-5xl">
          {account.first_name}'s Profile Page
        </h1>
        <h2 className="max-w-screen-sm mx-auto font-bold mt-12 text-xl">
          Account Details
        </h2>
        <div className="bg-[#EEE5DD] rounded-lg p-10 max-w-screen-sm mx-auto">
          <div className="mr-10 ml-10">
            <h2 className="font-bold mb-2 text-lg">
              <FontAwesomeIcon icon={faUserCircle} className="mr-2" />
              First Name{" "}
            </h2>
            <div className="bg-[#D9D9D9] rounded-lg p-2 flex flex-col mb-10">
              {account.first_name}
            </div>
            <h2 className="font-bold mb-2 text-lg">
              <FontAwesomeIcon icon={faCircleUser} className="mr-2" />
              Last Name
            </h2>
            <div className="bg-[#D9D9D9] rounded-lg p-2 flex flex-col mb-10">
              {account.last_name}
            </div>
            <h2 className="font-bold mb-2 text-lg">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Email
            </h2>
            <div className="bg-[#D9D9D9] rounded-lg p-2 flex flex-col mb-10">
              {account.email}
            </div>
            <h2 className="font-bold mb-2 text-lg">
              <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
              Zipcode
            </h2>
            <div className="bg-[#D9D9D9] rounded-lg p-2 flex flex-col mb-10">
              {account.zipcode}
            </div>
          </div>
          <a href="/me/updateaccount">
            <button
              title="Edit"
              className="ml-auto flex p-2.5 bg-[#FFB801] rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </button>
          </a>
        </div>
        <h2 className="max-w-screen-sm mx-auto font-bold mt-12 text-xl">
          Food Preferences
        </h2>
        <div>
          <div className="bg-[#EEE5DD] rounded-lg p-10 max-w-screen-sm mx-auto flex flex-col mb-20">
            <div className="flex flex-row">
              <div className="w-1/2 mr-10 ml-10">
                <h2 className="font-bold mb-2 text-lg">Allergies</h2>
                <div className="bg-[#D9D9D9] rounded-lg p-2 flex flex-col mb-10">
                  <div className="flex items-center mt-2 mb-2 ml-3 mx-auto">
                    <FontAwesomeIcon icon={faFish} className="mr-2" />
                    Seafood
                    {allergy?.seafood?.toString() === "true" ? (
                      <img
                        src={require("../images/checkbox.png")}
                        className="w-5 ml-3"
                      />
                    ) : (
                      <img
                        src={require("../images/empty_checkbox.png")}
                        className="w-5 ml-3"
                      />
                    )}
                  </div>
                  <div className="flex items-center mt-2 mb-2 ml-3">
                    <FontAwesomeIcon icon={faBreadSlice} className="mr-2" />
                    Gluten-Free
                    {allergy?.gluten_free?.toString() === "true" ? (
                      <img
                        src={require("../images/checkbox.png")}
                        className="w-5 ml-3"
                      />
                    ) : (
                      <img
                        src={require("../images/empty_checkbox.png")}
                        className="w-5 ml-3"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="w-1/2 mr-10 ml-10">
                <h2 className="font-bold mb-2 text-lg">Dietary Restrictions</h2>
                <div className="bg-[#D9D9D9] rounded-lg p-2 flex flex-col mb-10">
                  <div className="flex items-center mt-2 mb-2 ml-3">
                    <FontAwesomeIcon icon={faLeaf} className="mr-2" />
                    Vegan
                    {diet_restrict?.vegan?.toString() === "true" ? (
                      <img
                        src={require("../images/checkbox.png")}
                        className="w-5 ml-3"
                      />
                    ) : (
                      <img
                        src={require("../images/empty_checkbox.png")}
                        className="w-5 ml-3"
                      />
                    )}
                  </div>
                  <div className="flex items-center mt-2 mb-2 ml-3">
                    <FontAwesomeIcon icon={faCarrot} className="mr-2" />
                    Vegetarian
                    {diet_restrict?.vegetarian?.toString() === "true" ? (
                      <img
                        src={require("../images/checkbox.png")}
                        className="w-5 ml-3"
                      />
                    ) : (
                      <img
                        src={require("../images/empty_checkbox.png")}
                        className="w-5 ml-3"
                      />
                    )}
                  </div>
                  <div className="flex items-center mt-2 mb-2 ml-3">
                    <FontAwesomeIcon icon={faBowlFood} className="mr-2" />
                    Halal
                    {diet_restrict?.halal?.toString() === "true" ? (
                      <img
                        src={require("../images/checkbox.png")}
                        className="w-5 ml-3"
                      />
                    ) : (
                      <img
                        src={require("../images/empty_checkbox.png")}
                        className="w-5 ml-3"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row ml-auto -mt-20">
              <a href="/me/updateneeds">
                <button
                  title="Edit"
                  className="mt-20 p-2.5 bg-[#FFB801] rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
