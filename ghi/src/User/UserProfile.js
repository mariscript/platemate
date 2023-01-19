import { useState, useEffect } from "react";
import React from "react";
import { useAuthContext } from "../Authentication/AuthenticateUser";

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
      <div>
        <h2 className="text-center">Hello {account.first_name}</h2>
        <h2 className="text-center">Account Details</h2>
        <div className="flex justify-center">
          <table className="table table-hover table-striped">
            <thead className="text-center">
              <tr className="header">
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Zipcode</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr className="align-middle">
                <td>{account.first_name}</td>
                <td>{account.last_name}</td>
                <td>{account.email}</td>
                <td>{account.zipcode}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2>Food Preferences</h2>
        <div>
          <h4>Allergies</h4>
          <table>
            <tbody>
              <tr>
                <td>{allergy.seafood}</td>
                <td>{allergy.gluten_free}</td>
              </tr>
            </tbody>
          </table>
          <h4>Diet Restrictions</h4>
          <table>
            <tbody>
              <tr>
                <td>{diet_restrict.vegan}</td>
                <td>{diet_restrict.vegetarian}</td>
                <td>{diet_restrict.halal}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default UserProfile;
