import React, { useState, useEffect } from "react";
import { useAuthContext, useToken } from "../Authentication/AuthenticateUser";
import { Navigate, useNavigate } from "react-router-dom";

function UpdateAllergies() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  const handleChange1 = () => {
    setChecked1(!checked1);
  };

  const handleChange2 = () => {
    setChecked2(!checked2);
  };
  //   fetch data

  //   form submission

  return (
    <div className="text-center">
      <h2 className="text-center">Update Allergies</h2>
      <div className="h-screen flex flex-col items-center justify-center">
        <form>
          <label>
            <input
              type="checkbox"
              checked1={checked1}
              onChange={handleChange1}
            />
            Seafood
          </label>
          <label>
            <input
              type="checkbox"
              checked2={checked2}
              onChange={handleChange2}
            />
            Gluten-Free
          </label>
          <br />
          <button type="submit">Submit</button>
          <br />
          <p>Is "My Value 1" checked? {checked1.toString()}</p>
          <p>Is "My Value 2" checked? {checked2.toString()}</p>
        </form>
      </div>
    </div>
  );
}
export default UpdateAllergies;
