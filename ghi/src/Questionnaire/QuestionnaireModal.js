import { useDispatch, useSelector } from "react-redux";
import { storeZipcode } from "../store/qZipcode";
import React, { useState, useEffect } from "react";
import { useAuthContext } from '../Authentication/AuthenticateUser'


function QuestionModal() {
    const [account, setAccount] = useState({});
    const dispatch = useDispatch()
    const [zipcode, setZipcode] = useState("");
    const [budget, setBudget] = useState(0)
    const [time, setTime] = useState("")
    const {token} = useAuthContext()

    // const budget =
    // const time =

    // const locationChange = (e) =>{}s
    const handleChange = (e) =>{
        const value = e.target.value;
        console.log(value)
        setZipcode(value);
    }

    const handleBudgetChange = (e) =>{
      setBudget(e.target.value);
  }

  const handleTimeChange = (e) =>{
    setTime(e.target.value);
}

    const updateLocation = (e) => {
        e.preventDefault();
        dispatch(storeZipcode({zipcode}));
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

    console.log(account)

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
              <label htmlFor="location">What is your budget</label>

              <div className="form-floating mb-3">
                <select value={budget} onChange={handleBudgetChange}>
                <option value="1">$ ($1-10)</option>
                <option value="2">$$ ($11-30)</option>
                <option value="3">$$$ ($31-60)</option>
                <option value="4">$$$$ ($61+)</option>
                <option value=""> ANY I GOT MONEY</option>
                </select>
            </div>
            <div className="form-floating mb-3">
                <select value={budget} onChange={handleBudgetChange}>
                <option value="1">$ ($1-10)</option>
                <option value="2">$$ ($11-30)</option>
                <option value="3">$$$ ($31-60)</option>
                <option value="4">$$$$ ($61+)</option>
                <option value=""> ANY I GOT MONEY</option>
                </select>
            </div>
            {/* <label htmlFor="location">What is your budget</label>
            <div className="form-floating mb-3">
                <input type="datetime-local" onChange={handleTimeChange} value={(time || '').toString().substring(0, 16)}>Choose a date</input>
            </div> */}
          </form>
        </div>
      </div>
    </div>
    </>
  );
}



export default QuestionModal;


//dispatch(deleteCat(cat.id)
