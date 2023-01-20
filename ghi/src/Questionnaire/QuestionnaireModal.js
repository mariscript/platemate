import { useDispatch, useSelector } from "react-redux";
import { storeZipcode } from "../store/qZipcode";
import React, { useState, useEffect } from "react";
import { useAuthContext } from '../Authentication/AuthenticateUser'

function QuestionModal() {
    const [account, setAccount] = useState({});
    const dispatch = useDispatch()
    const [zipcode, setZipcode] = useState("");
    const [budget, setBudget] = useState(0)
    const [datetime, setDateTime] = useState("")
    const [takeInOut, setTakeInOut] = useState("")
    const [categories, setCategories] = useState([])
    const {token} = useAuthContext()

    // const budget =
    // const time =

    // const locationChange = (e) =>{}s
    const handleChange = (e) =>{
        const value = e.target.value;
        console.log(value)
        setZipcode(value);
    }

    const updateLocation = (e) => {
      e.preventDefault();
      dispatch(storeZipcode({zipcode}));
  }

    const handleBudgetChange = (e) =>{
      setBudget(e.target.value);
  }

    const handleDateTimeChange = (e) =>{
      setDateTime(e.target.value);
    }

    const handleTakeInOutChange = (e) => {
      setTakeInOut(e.target.value)
    }

    const handleCategoriesChange = (e) => {
      let options = e.target.options;
      let selectedOptions = [];

      for(let i = 0; i < options.length; i++) {
          if( options[i].selected ) {
              selectedOptions.push(options[i].value);
          }
      }
      setCategories(selectedOptions)
    }


    const fetchAccount = async () => {
        const url = `${process.env.REACT_APP_PLATEMATE_API_HOST}/api/accounts/me/`
        const result = await fetch(url,{
            headers: { Authorization: `Bearer ${token}`},
        });
        const data = await result.json();
        setAccount(data)
        setZipcode(data?.zipcode)
    }

    useEffect(() => {
        if (token) {
          fetchAccount()
          setZipcode(account?.zipcode)
        }
    }, [token]);

  return (
    <>
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Questionnaire</h1>
          <form>

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
              <button onClick={updateLocation} type="submit"> Ready! </button>
            </div>
              <label htmlFor="budget">What is your budget</label>

              <div className="form-floating mb-3">
                <select value={budget} onChange={handleBudgetChange}>
                <option value="1">$ ($1-10)</option>
                <option value="2">$$ ($11-30)</option>
                <option value="3">$$$ ($31-60)</option>
                <option value="4">$$$$ ($61+)</option>
                <option value=""> ANY I GOT MONEY</option>
                </select>
            </div>
            <label htmlFor="takeInOut">Carryout or Delivery?</label>
            <div className="form-floating mb-3">
                <select value={takeInOut} onChange={handleTakeInOutChange}>
                  <option value="pickup">Pickup</option>
                  <option value="delivery">Delivery</option>
                </select>
            </div>
            <label htmlFor="location">What time are you eating?</label>
            <div className="form-floating mb-3">
                <input type="datetime-local" value = {datetime} onChange={handleDateTimeChange} />
            </div>

            <label htmlFor="categories">Which of the following would you prefer</label>
              <div className="form-floating mb-3">
                <select value={categories} onChange={handleCategoriesChange} multiple = {true}>
                  <option value="chinese"> Chinese</option>
                  <option value="pizza">Pizza</option>
                  <option value="fast food">Fast Food</option>
                  <option value="mexican">Mexican</option>
                  <option value="japanese">Japanese</option>
                  <option value= ""> NOT FEELING PICKY</option>
                  <option value="none">None of these</option>
                </select>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}



export default QuestionModal;


//dispatch(deleteCat(cat.id)
