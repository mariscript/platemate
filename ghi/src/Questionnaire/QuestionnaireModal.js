import { useDispatch, useSelector } from "react-redux";
import { storeYelp } from "../store/yelpVar";
import React, { useState, useEffect } from "react";
import { useAuthContext } from "../Authentication/AuthenticateUser";
import { useNavigate } from "react-router-dom";
import Select from "react-tailwindcss-select";

const options = [
  { value: "chinese", label: "🥢 Chinese" },
  { value: "pizza", label: "🍕 Pizza" },
  { value: "fast food", label: "🍔 Fast Food" },
  { value: "indian", label: "🍛 Indian" },
  { value: "mexican", label: "🌮 Mexican" },
  { value: "japanese", label: "🍣 Japanese" },
];

function QuestionModal() {
  const [account, setAccount] = useState({});
  const dispatch = useDispatch();
  const [zipcode, setZipcode] = useState("");
  const [budget, setBudget] = useState(0);
  let [datetime, setDateTime] = useState("");
  const [takeInOut, setTakeInOut] = useState("");
  let [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const { token } = useAuthContext();

  const handleChange = (e) => {
    const value = e.target.value;
    setZipcode(value);
  };

  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
  };

  const handleDateTimeChange = (e) => {
    setDateTime(e.target.value);
  };

  const handleTakeInOutChange = (e) => {
    setTakeInOut(e.target.value);
  };

  const handleCategoriesChange = (value) => {
    setCategories(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    categories = categories.map((x) => x.value);
    datetime = `${datetime.slice(0, 10)} ${datetime.slice(
      11,
      13
    )}%3A${datetime.slice(14)}`;
    dispatch(storeYelp({ zipcode, budget, datetime, takeInOut, categories }));
    navigate("/restaurants");
  };

  const fetchAccount = async () => {
    const url = `${process.env.REACT_APP_PLATEMATE_API_HOST}/api/accounts/me/`;
    const result = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await result.json();
    setAccount(data);
    setZipcode(data?.zipcode);
  };

  useEffect(() => {
    if (token) {
      fetchAccount();
      setZipcode(account?.zipcode);
    }
  }, [token]);

  if (token) {
    return (
      <>
        <h1 className="flex justify-center items-center font-bold mt-5 text-3xl">
          Let's Find Your Plate!
        </h1>
        <div className="flex justify-center items-center">
          <div className="flex items-center justify-center shadow p-4 mt-10 mb-10">
            <div className="flex items-center justify-center">
              <form className="mx-auto" onSubmit={handleFormSubmit}>
                <label htmlFor="location">
                  <p className="font-bold">Your Current Location</p>
                </label>
                <div className="mb-3">
                  <input
                    onChange={handleChange}
                    required
                    type="search"
                    name="zipcode"
                    id="zipcode"
                    className="form-control"
                    defaultValue={account?.zipcode}
                  />
                </div>
                <label htmlFor="budget">
                  <p className="font-bold">Your Budget</p>
                </label>

                <div className="form-floating mb-3">
                  <select required value={budget} onChange={handleBudgetChange}>
                    <option value="">Select One</option>
                    <option value="1">💸 $ ($1-10)</option>
                    <option value="2">💳 $$ ($11-30)</option>
                    <option value="3">💵 $$$ ($31-60)</option>
                    <option value="4">💰 $$$$ ($61+)</option>
                    <option value="5">🤑 ANY I GOT MONEY</option>
                  </select>
                </div>
                <label htmlFor="takeInOut">
                  <p className="font-bold">Carryout or Delivery?</p>
                </label>
                <div className="items-center form-floating mb-3 mx-2">
                  <select
                    required
                    value={takeInOut}
                    onChange={handleTakeInOutChange}
                  >
                    <option value="">Select One</option>
                    <option value="pickup">🥡 Pickup</option>
                    <option value="delivery">🚗 Delivery</option>
                  </select>
                </div>
                <label htmlFor="location">
                  <p className="font-bold">When are you eating?</p>
                </label>
                <div className="form-floating mb-3 mx-2">
                  <input
                    required
                    type="datetime-local"
                    value={datetime}
                    onChange={handleDateTimeChange}
                  />
                </div>

                <label htmlFor="categories">
                  <p className="font-bold">Pick your preferences</p>
                </label>
                <div className="form-floating mb-3 mx-2">
                  <Select
                    value={categories}
                    onChange={handleCategoriesChange}
                    isMultiple={true}
                    options={options}
                    searchInputPlaceholder
                  />
                </div>
                <button
                  className="bg-[#C26866] hover:bg-[#FDECA9] text-white hover:text-black font-bold py-3 px-4 mb-2 rounded-full"
                  type="submit"
                >
                  {" "}
                  Ready to Eat!
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <h1>
        {" "}
        Looks like you don't have an account yet! Please sign up or login, so we
        can find your plate!{" "}
      </h1>
    );
  }
}
export default QuestionModal;
