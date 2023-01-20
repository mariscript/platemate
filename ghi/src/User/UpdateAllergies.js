import React, { useState, useEffect } from "react";
import { useAuthContext, useToken } from '../Authentication/AuthenticateUser'
import { Navigate, useNavigate } from "react-router-dom";

function UpdateAllergies() {
    const [account, setAccount] = useState({});
    const [allergy, setAllergy] = useState({});
    const [seafood, setSeafood] = useState({});
    const [gluten_free, setGluten] = useState({});
    const [ , , , , , updateallergy] = useToken();
    const navigate = useNavigate();
    const {token} = useAuthContext()

    const fetchAllergies = async () => {
        const url = `${process.env.REACT_APP_PLATEMATE_API_HOST}/api/allergies/me/`
        const result = await fetch(url,{
            headers: { Authorization: `Bearer ${token}`}, 
        });
        const data = await result.json();
        setAllergy(data)
        setSeafood(data.seafood)
        setGluten(data.gluten_free)
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        updateallergy(seafood, gluten_free);
        setSeafood("")
        setGluten("")
        navigate("/me")
  };


    useEffect(() => {
        if (token) {
            fetchAllergies()
        }
    }, [token]);
    
    if (account || account !== undefined){
        return(
            <div className="text-center">
                <h2 className="text-center">Update Allergies</h2>
                <div className="h-screen flex flex-col 
                    items-center justify-center">
                    <form onSubmit={handleFormSubmit}>
                        <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4 placeholder:text-sm"
                        placeholder="Seafood"
                        defaultValue={allergy?.seafood?.toString()}
                        />
                        <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4 placeholder:text-sm"
                        placeholder="Gluten Free"
                        defaultValue={allergy?.gluten_free?.toString()}
                        />
                        <button className="bg-[#BB5855] mx-0 rounded text-[#FDECA9] text-sm py-1 px-4 relative inline-flex group items-center justify-center cursor-pointer" type="submit">Update</button>
                    </form>
                </div>
            </div>
        )
    };
}
export default UpdateAllergies;