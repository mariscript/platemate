import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext, useToken } from "../Authentication/AuthenticateUser";

export default function CreateDietaryNeeds() {
  const [seafood, setSeafood] = useState(false);
  const [gluten_free, setGluten] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);
  const [halal, setHalal] = useState(false);
  const { token } = useAuthContext();
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
  };

  const seafoodChange = (e) => {
        let value = e.target.value;
        if (value==="true"){
            setSeafood(true)
        }
        else{
            setSeafood(false)
        }
    }
  

  const glutenChange = (e) => {
      let value = e.target.value;
      if (value==="true"){
          setGluten(true)
      }
      else{
          setGluten(false)
      }
  }
  

  const veganChange = (e) => {
      let value = e.target.value;
      if (value==="true"){
          setVegan(true)
      }
      else{
          setVegan(false)
      }
  }
  

  const vegetarianChange = (e) => {
      let value = e.target.value;
      if (value==="true"){
          setVegetarian(true)
      }
      else{
          setVegetarian(false)
      }
  }
  

  const halalChange = (e) => {
      let value = e.target.value;
      if (value==="true"){
          setHalal(true)
      }
      else{
          setHalal(false)
      }
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(seafood, gluten_free, vegan, vegetarian, halal, account.id);
    createallergy(seafood, gluten_free, account.id);
    createdietrestrict(vegan, vegetarian, halal, account.id);
    setSeafood("");
    setGluten("");
    setVegan("");
    setVegetarian("");
    setHalal("");

    navigate("/me");
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
      <h1 className="text-center font-bold mt-7 text-2xl mb-12">
        Allergies/Dietary Needs
      </h1>

      <div className="bg-[#EEE5DD] rounded-lg p-10 max-w-screen-sm mx-auto mb-16 w-[400px]">
        <h3 className="font-bold text-sm text-red-500 mx-auto text-center mb-8">
          ** Can continue without inputs if none **
        </h3>
        <form onSubmit={handleFormSubmit}>
          <div>
            <select
              required
              id="seafood"
              onChange={seafoodChange}
              class="border border-gray-300 text-sm rounded-lg block w-32 p-2.5 bg-[#D9D9D9] text-black font-bold mb-6 mx-auto"
            >
              <option selected>Seafood</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div>
            <select
              required
              id="gluten"
              onChange={glutenChange}
              class="border border-gray-300 text-sm rounded-lg block w-32 p-2.5 bg-[#D9D9D9] text-black font-bold mb-6 mx-auto"
            >
              <option selected>Gluten-Free</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <select
            required
            id="vegan"
            onChange={veganChange}
            class="border border-gray-300 text-sm rounded-lg block w-32 p-2.5 bg-[#D9D9D9] text-black font-bold mb-6 mx-auto"
          >
            <option>Vegan</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <div>
            <select
              required
              id="vegetarian"
              onChange={vegetarianChange}
              class="border border-gray-300 text-sm rounded-lg block w-32 p-2.5 bg-[#D9D9D9] text-black font-bold mb-6 mx-auto"
            >
              <option>Vegetarian</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div>
            <select
              required
              id="halal"
              onChange={halalChange}
              class="border border-gray-300 text-sm rounded-lg block w-32 p-2.5 bg-[#D9D9D9] text-black font-bold mb-6 mx-auto"
            >
              <option>Halal</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
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
