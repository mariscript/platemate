import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../Authentication/AuthenticateUser";

export default function CreateDietaryNeeds() {
    const [seafood, setSeafood] = useState({});
    const [gluten_free, setGluten] = useState({});
    const [vegan, setVegan] = useState({});
    const [vegetarian, setVegetarian] = useState({});
    const [halal, setHalal] = useState({});
    const {token} = useAuthContext();
    const navigate = useNavigate();
    const [account, setAccount] = useState({});

    const fetchAccount = async () => {
        const url = `${process.env.REACT_APP_PLATEMATE_API_HOST}/api/accounts/me/`
        const result = await fetch(url,{
            headers: { Authorization: `Bearer ${token}`}, 
        });
        const data = await result.json();
        setAccount(data)
    }
    
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        setSeafood("");
        setGluten("");
        setVegan("");
        setVegetarian("");
        setHalal("");

        navigate("/me")
    }
    
    useEffect(() => {
        if (token) {
            fetchAccount()
        }
    }, [token]);

    return (
        <div className="text-center">
            <form>

                <select required id="seafood" className="">
                    <option value="">Seafood</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>

                <select required id="gluten" className="">
                    <option value="">Gluten Free</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>

                <select required id="vegan" className="">
                    <option value="">Vegan</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>

                <select required id="vegetarian" className="">
                    <option value="">Vegetarian</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>

                <select required id="halal" className="">
                    <option value="">Gluten Free</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
                <div>
                <button>Create Dietary Needs</button>
                </div>
            </form>
        </div>
    )

}