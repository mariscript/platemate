import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext , useToken } from "../Authentication/AuthenticateUser";

export default function CreateDietaryNeeds() {
    const [seafood, setSeafood] = useState(false);
    const [gluten_free, setGluten] = useState(false);
    const [vegan, setVegan] = useState(false);
    const [vegetarian, setVegetarian] = useState(false);
    const [halal, setHalal] = useState(false);
    const {token} = useAuthContext();
    const navigate = useNavigate();
    const [account, setAccount] = useState({});
    const [, , , , , , createallergy, createdietrestrict] = useToken();

    const fetchAccount = async () => {
        const url = `${process.env.REACT_APP_PLATEMATE_API_HOST}/api/accounts/me/`
        const result = await fetch(url,{
            headers: { Authorization: `Bearer ${token}`}, 
        });
        const data = await result.json();
        setAccount(data)
    }
    
    const handleChange1 = () => {
        let e = document.getElementById("seafood")
        let value = e.value;
        if (value==="true"){
            setSeafood(true)
        }
        else{
            setSeafood(false)
        }
    }

    const handleChange2 = () => {
        let e = document.getElementById("gluten")
        let value = e.value;
        if (value==="true"){
            setGluten(true)
        }
        else{
            setGluten(false)
        }
    }

    const handleChange3 = () => {
        let e = document.getElementById("vegan")
        let value = e.value;
        if (value==="true"){
            setVegan(true)
        }
        else{
            setVegan(false)
        }
    }

    const handleChange4 = () => {
        let e = document.getElementById("vegatarian")
        let value = e.value;
        if (value==="true"){
            setVegetarian(true)
        }
        else{
            setVegetarian(false)
        }
    }

    const handleChange5 = () => {
        let e = document.getElementById("halal")
        let value = e.value;
        if (value==="true"){
            setHalal(true)
        }
        else{
            setHalal(false)
        }
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        createallergy(seafood, gluten_free, account.id)
        createdietrestrict(vegan, vegetarian, halal, account.id)
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
            <form onSubmit={handleFormSubmit}>

                <select required id="seafood" onChange={handleChange1}>
                    <option >Seafood</option>
                    <option value="true" >Yes</option>
                    <option value="false" >No</option>
                </select>

                <select required id="gluten" onChange={handleChange2}>
                    <option >Gluten Free</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>

                <select required id="vegan" onChange={handleChange3}>
                    <option >Vegan</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>

                <select required id="vegetarian" onChange={handleChange4}>
                    <option >Vegetarian</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>

                <select required id="halal" onChange={handleChange5}>
                    <option >Halal</option>
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