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
    { value: "mexican", label: "🌮 Taco" },
    { value: "japanese", label: "🍣 Sushi" }
];

function QuestionModal() {
  const [account, setAccount] = useState({});
  const dispatch = useDispatch();
  const [zipcode, setZipcode] = useState("");
  const [budget, setBudget] = useState(0);
  const [datetime, setDateTime] = useState("");
  const [takeInOut, setTakeInOut] = useState("");
  const [categories, setCategories] = useState([]);
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

  const handleCategoriesChange = value => {
      console.log("value:", value);
      setCategories(value);

  };


  const handleFormSubmit = (e) => {
    e.preventDefault()
    let category = categories.map((x)=> x.value)
    setCategories(category)
    console.log(category)
    dispatch(storeYelp({zipcode,budget,datetime,takeInOut,categories}))
    navigate("/restaurants")

  }
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

  return (
    <>
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Questionnaire</h1>
            <form onSubmit={handleFormSubmit}>
              <label htmlFor="location">Your current location</label>
              <div className="form-floating mb-3">
                <input
                  onChange={handleChange}
                  placeholder="Zipcode"
                  required
                  type="search"
                  name="zipcode"
                  id="zipcode"
                  className="form-control"
                  defaultValue={account?.zipcode}
                />
              </div>
              <label htmlFor="budget">What is your budget</label>

              <div className="form-floating mb-3">
                <select required value={budget} onChange={handleBudgetChange} >
                  <option value=""></option>
                  <option value="1">💸 $ ($1-10)</option>
                  <option value="2">💳 $$ ($11-30)</option>
                  <option value="3">💵 $$$ ($31-60)</option>
                  <option value="4">💰 $$$$ ($61+)</option>
                  <option value="">🤑 ANY I GOT MONEY</option>
                </select>
              </div>
              <label htmlFor="takeInOut">Carryout or Delivery?</label>
              <div className="form-floating mb-3">
                <select required value={takeInOut} onChange={handleTakeInOutChange}>
                <option value=""></option>
                  <option value="pickup">🥡 Pickup</option>
                  <option value="delivery">🚗 Delivery</option>
                </select>
              </div>
              <label htmlFor="location">What time are you eating?</label>
              <div className="form-floating mb-3">
                <input
                  required
                  type="datetime-local"
                  value={datetime}
                  onChange={handleDateTimeChange}
                />
              </div>

              <label htmlFor="categories">
                Which of the following would you prefer
              </label>
              <div className="form-floating mb-3">
                <Select
                  value={categories}
                  onChange={handleCategoriesChange}
                  isMultiple={true}
                  options={options}
                  placeholder="Select one or more categories... or nothing"
                />
              </div>
              <button type="submit"> Ready to eat!</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuestionModal;

//dispatch(deleteCat(cat.id)
