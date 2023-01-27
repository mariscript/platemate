import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext, useToken } from "../Authentication/AuthenticateUser";
import { useDispatch } from "react-redux";
import { storeUser } from "../store/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFish,
  faBreadSlice,
  faLeaf,
  faCarrot,
  faBowlFood,
} from "@fortawesome/free-solid-svg-icons";

export default function CreateDietaryNeeds() {
  const [seafood, setSeafood] = useState(false);
  const [gluten_free, setGluten] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);
  const [halal, setHalal] = useState(false);
  const { token } = useAuthContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [account, setAccount] = useState({});
  const [, , , , , , , createallergy, createdietrestrict] = useToken();

  const fetchAccount = async () => {
    const url = `${process.env.REACT_APP_PLATEMATE_API_HOST}/api/accounts/me/`;
    const result = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await result.json();
    setAccount(data);
    dispatch(storeUser({ account }));
    console.log(data);
  };

  const seafoodChange = (e) => {
    let value = e.target.value;
    if (value === "true") {
      setSeafood(true);
    } else {
      setSeafood(false);
    }
  };

  const glutenChange = (e) => {
    let value = e.target.value;
    if (value === "true") {
      setGluten(true);
    } else {
      setGluten(false);
    }
  };

  const veganChange = (e) => {
    let value = e.target.value;
    if (value === "true") {
      setVegan(true);
    } else {
      setVegan(false);
    }
  };

  const vegetarianChange = (e) => {
    let value = e.target.value;
    if (value === "true") {
      setVegetarian(true);
    } else {
      setVegetarian(false);
    }
  };

  const halalChange = (e) => {
    let value = e.target.value;
    if (value === "true") {
      setHalal(true);
    } else {
      setHalal(false);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    createallergy(seafood, gluten_free, account.id);
    createdietrestrict(vegan, vegetarian, halal, account.id);
    setSeafood("");
    setGluten("");
    setVegan("");
    setVegetarian("");
    setHalal("");

    navigate("/");
  };

  useEffect(() => {
    if (token) {
      fetchAccount();
    }
  }, [token]);

  return (
    <>
      <img
        src={require("../images/diet.png")}
        width="70px"
        className="mx-auto mt-10"
      />
      <h1 className="text-center font-md mt-7 text-5xl mb-12">
        Allergies{" "}
        <img
          src={require("../images/slash.png")}
          width="40px"
          className="inline-block -ml-3 -mr-3"
        />{" "}
        Dietary Needs
      </h1>

      <div className="bg-[#EEE5DD] rounded-lg p-10 max-w-screen-sm mx-auto mb-16 w-[400px]">
        <h3 className="font-bold text-sm text-red-500 mx-auto text-center mb-8">
          ** Can continue without inputs if none **
        </h3>
        <form onSubmit={handleFormSubmit}>
          <div>
            <div className="font-bold text-center mb-2 text-[#a24d4a]">
              <FontAwesomeIcon icon={faFish} className="mr-2" />
              Seafood
            </div>
            <select
              required
              id="seafood"
              onChange={seafoodChange}
              className="border border-gray-300 text-sm rounded-lg block w-32 p-2.5 bg-[#D9D9D9] text-black font-bold mb-6 mx-auto"
            >
              <option value="true">Yes</option>
              <option value="false" selected>
                No
              </option>
            </select>
          </div>
          <div>
            <div className="font-bold text-center mb-2 text-[#a24d4a]">
              <FontAwesomeIcon icon={faBreadSlice} className="mr-2" />
              Gluten-Free
            </div>
            <select
              required
              id="gluten"
              onChange={glutenChange}
              className="border border-gray-300 text-sm rounded-lg block w-32 p-2.5 bg-[#D9D9D9] text-black font-bold mb-6 mx-auto"
            >
              <option value="true">Yes</option>
              <option value="false" selected>
                No
              </option>
            </select>
          </div>
          <div className="font-bold text-center mb-2 text-[#a24d4a]">
            <FontAwesomeIcon icon={faLeaf} className="mr-2" />
            Vegan
          </div>
          <select
            required
            id="vegan"
            onChange={veganChange}
            className="border border-gray-300 text-sm rounded-lg block w-32 p-2.5 bg-[#D9D9D9] text-black font-bold mb-6 mx-auto"
          >
            <option value="true">Yes</option>
            <option value="false" selected>
              No
            </option>
          </select>
          <div>
            <div className="font-bold text-center mb-2 text-[#a24d4a]">
              <FontAwesomeIcon icon={faCarrot} className="mr-2" />
              Vegetarian
            </div>
            <select
              required
              id="vegetarian"
              onChange={vegetarianChange}
              className="border border-gray-300 text-sm rounded-lg block w-32 p-2.5 bg-[#D9D9D9] text-black font-bold mb-6 mx-auto"
            >
              <option value="true">Yes</option>
              <option value="false" selected>
                No
              </option>
            </select>
          </div>
          <div>
            <div className="font-bold text-center mb-2 text-[#a24d4a]">
              <FontAwesomeIcon icon={faBowlFood} className="mr-2" />
              Halal
            </div>
            <select
              required
              id="halal"
              onChange={halalChange}
              className="border border-gray-300 text-sm rounded-lg block w-32 p-2.5 bg-[#D9D9D9] text-black font-bold mb-6 mx-auto"
            >
              <option value="true">Yes</option>
              <option value="false" selected>
                No
              </option>
            </select>
          </div>

          <div>
            <button
              className="font-bold mx-auto mt-12 flex p-2.5 bg-[#97D06B] rounded-xl hover:rounded-3xl hover:bg-[#6a934c] transition-all duration-300 text-black"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
