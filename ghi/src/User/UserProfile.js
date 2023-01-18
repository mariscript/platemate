import { useState, useEffect } from "react";
import React from "react";
import { useAuthContext } from '../Authentication/AuthenticateUser'

function UserProfile() {
    const [account, setAccount] = useState({});
    const [allergy, setAllergy] = useState({});
    const [diet_restrict, setDiet] = useState({});
    const {token} = useAuthContext()

    const fetchAccount = async () => {
        const url = `${process.env.REACT_APP_PLATEMATE_API_HOST}/api/accounts/me/`
        const result = await fetch(url,{
            headers: { Authorization: `Bearer ${token}`}, 
        });
        const data = await result.json();
        setAccount(data)
    }

    const fetchAllergies = async () => {
        const url = `${process.env.REACT_APP_PLATEMATE_API_HOST}/api/allergies/me/`
        const result = await fetch(url,{
            headers: { Authorization: `Bearer ${token}`}, 
        });
        const data = await result.json();
        setAllergy(data)
    }
    
    const fetchDietRestrict = async () => {
        const url = `${process.env.REACT_APP_PLATEMATE_API_HOST}/api/diet_restricts/me/`
        const result = await fetch(url,{
            headers: { Authorization: `Bearer ${token}`}, 
        });
        const data = await result.json();
        setDiet(data)
    }

    useEffect(() => {
        if (token) {
            fetchAccount()
            fetchAllergies()
            fetchDietRestrict()
        }
    }, [token]);


    if (account || account !== undefined){
        return(
        <div>
            <h2 className="text-center">Hello {account.first_name}</h2>
            <h2 className="text-center">Account Details</h2>
            <div className="flex justify-center">
                <table className="table-auto border-separate border-spacing-4">
                    <thead className="text-center">
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Zipcode</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td>{account.first_name}</td>
                            <td>{account.last_name}</td>
                            <td>{account.email}</td>
                            <td>{account.zipcode}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h2 className="text-center">Food Preferences:</h2>
            <div className="flex justify-center">
                <h4 className="text-center">Allergies:</h4>
                <table className="table-auto border-separate border-spacing-5">
                    <thead className="text-center">
                        <tr className="header">
                            <th>seafood</th>
                            <th>gluten free</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{allergy?.seafood?.toString()}</td>
                            <td>{allergy?.gluten_free?.toString()}</td>
                        </tr>
                    </tbody>
                </table>

                <h4 className="text-center">Diet Restrictions:</h4>
                <table className="table-auto border-separate border-spacing-5">
                    <thead className="text-center">
                        <tr className="header">
                            <th>vegan</th>
                            <th>vegetarian</th>
                            <th>halal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{diet_restrict?.vegan?.toString()}</td>
                            <td>{diet_restrict?.vegetarian?.toString()}</td>
                            <td>{diet_restrict?.halal?.toString()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
    }
    
};
   
export default UserProfile;