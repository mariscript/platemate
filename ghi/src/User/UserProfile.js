import React, { useState, useEffect } from "react";
import { useAuthContext, useToken } from "../Authentication/AuthenticateUser";

function UserProfile() {
  const [account, setAccount] = useState({});
  const [allergy, setAllergy] = useState({});
  const [diet_restrict, setDiet] = useState({});
  const { token } = useAuthContext();

  const fetchAccount = async () => {
    const url = `${process.env.REACT_APP_PLATEMATE_API_HOST}/api/accounts/me/`;
    const result = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await result.json();
    setAccount(data);
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

  if (account || account !== undefined) {
    return (
      <>
        <img
          src={require("../images/profile.png")}
          width="70px"
          className="mx-auto mt-10"
        />
        <h1 className="text-center font-bold mt-7 text-2xl">
          {account.first_name}'s Profile Page
        </h1>

        {/* Account Details */}
        <h2 className="max-w-screen-sm mx-auto font-bold mt-12 text-xl">
          Account Details
        </h2>
        <div className="bg-[#EEE5DD] rounded-lg p-10 max-w-screen-sm mx-auto">
          <div className="mr-10 ml-10">
            <h1 className="font-bold mb-2 text-lg">First Name</h1>
            <div className="bg-[#D9D9D9] rounded-lg p-2 flex flex-col mb-10">
              {account.first_name}
            </div>
            <h1 className="font-bold mb-2 text-lg">Last Name</h1>
            <div className="bg-[#D9D9D9] rounded-lg p-2 flex flex-col mb-10">
              {account.last_name}
            </div>
            <h1 className="font-bold mb-2 text-lg">Email</h1>
            <div className="bg-[#D9D9D9] rounded-lg p-2 flex flex-col mb-10">
              {account.email}
            </div>
            <h1 className="font-bold mb-2 text-lg">Zipcode</h1>
            <div className="bg-[#D9D9D9] rounded-lg p-2 flex flex-col mb-10">
              {account.zipcode}
            </div>
          </div>
          <a href="/me/updateaccount">
            <button className="ml-auto flex p-2.5 bg-[#FFB801] rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white">
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

        {/* Food Preferences */}
        {/* <h2 className="text-center">Food Preferences:</h2>
        <div className="flex justify-center">
          <h4 className="text-center">Allergies:</h4>
          <table className="table-auto border-separate border-spacing-5">
            <thead className="text-center">
              <tr className="header">
                <th>seafood</th>
                <th>gluten free</th>
                <th>button</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{allergy?.seafood?.toString()}</td>
                <td>{allergy?.gluten_free?.toString()}</td>
                <td>
                  <a href="/me/updateallergy">
                    <button className="bg-[#BB5855] mx-0 rounded text-[#FDECA9] text-sm py-1 px-4 relative inline-flex group items-center justify-center cursor-pointer">
                      Update Allergies
                    </button>
                  </a>
                </td>
              </tr>
            </tbody>
          </table> */}
        <h2 className="max-w-screen-sm mx-auto font-bold mt-12 text-xl">
          Food Preferences
        </h2>
        <div className="bg-[#EEE5DD] rounded-lg p-10 max-w-screen-sm mx-auto flex mb-20">
          <div className="w-1/2 mr-10 ml-10">
            <h1 className="font-bold mb-2 text-lg">Allergies</h1>
            <div className="bg-[#D9D9D9] rounded-lg p-2 flex flex-col mb-10">
              <div className="flex items-center mt-2 mb-2 ml-3">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-md font-medium text-gray-900 dark:text-gray-300"
                >
                  Seafood
                </label>
              </div>
              <div className="flex items-center mt-2 mb-2 ml-3">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-md font-medium text-gray-900 dark:text-gray-300"
                >
                  Gluten-Free
                </label>
              </div>
            </div>
          </div>
          <div className="w-1/2 mr-10 ml-10">
            <h1 className="font-bold mb-2 text-lg">Dietary Restrictions</h1>
            <div className="bg-[#D9D9D9] rounded-lg p-2 flex flex-col mb-10">
              <div className="flex items-center mt-2 mb-2 ml-3">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-md font-medium text-gray-900 dark:text-gray-300"
                >
                  Vegan
                </label>
              </div>
              <div className="flex items-center mt-2 mb-2 ml-3">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-md font-medium text-gray-900 dark:text-gray-300"
                >
                  Vegetarian
                </label>
              </div>
              <div className="flex items-center mt-2 mb-2 ml-3">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-md font-medium text-gray-900 dark:text-gray-300"
                >
                  Halal
                </label>
              </div>
            </div>
          </div>
          <a href="/me/updateallergy">
            <button className="mt-20 p-2.5 bg-[#FFB801] rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white">
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

        {/* <h4 className="text-center">Dietary Restrictions:</h4>
        <table className="table-auto border-separate border-spacing-5">
          <thead className="text-center">
            <tr className="header">
              <th>vegan</th>
              <th></th>
              <th>vegetarian</th>
              <th></th>
              <th>halal</th>
              <th></th>
              <th>button</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{diet_restrict?.vegan?.toString()}</td>
              <td></td>
              <td>{diet_restrict?.vegetarian?.toString()}</td>
              <td></td>
              <td>{diet_restrict?.halal?.toString()}</td>
              <td></td>
              <td>
                <button className="bg-[#BB5855] mx-0 rounded text-[#FDECA9] text-sm py-1 px-4 relative inline-flex group items-center justify-center cursor-pointer">
                  Update Dietary Restrictions
                </button>
              </td>
            </tr>
          </tbody>
        </table> */}
      </>
    );
  }
}

export default UserProfile;
