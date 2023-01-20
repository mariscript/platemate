import React, { useState, useEffect } from "react";
import { useAuthContext, useToken } from '../Authentication/AuthenticateUser'
import { useNavigate } from "react-router-dom";

export default function UpdateAccountInfo() {
    const [account, setAccount] = useState({});
    const [email, setEmail] = useState("");
    const [first_name, setFirst] = useState("");
    const [last_name, setLast] = useState("");
    const [zipcode, setZip] = useState("");
    const [ , , , , update] = useToken();
    const navigate = useNavigate();
    const {token} = useAuthContext()


    const fetchAccount = async () => {
        const url = `${process.env.REACT_APP_PLATEMATE_API_HOST}/api/accounts/me/`
        const result = await fetch(url,{
            headers: { Authorization: `Bearer ${token}`}, 
        });
        const data = await result.json();
        setAccount(data)
        setFirst(data.first_name)
        setLast(data.last_name)
        setEmail(data.email)
        setZip(data.zipcode)
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        update(first_name,last_name,email,zipcode)  
        setEmail("");
        setFirst("");
        setLast("");
        setZip("");
        navigate("/me")
  };

    useEffect(() => {
        if (token) {
            fetchAccount()

        }
    }, [token]);


    if (account || account !== undefined){
        return(
            <div>
                <h2 className="text-center">Update Account Information</h2>
                <h2 className="text-center">Hello {account.first_name}</h2>
                <h2>Make sure to type something into each input location</h2>
                <div className="h-screen flex flex-col 
                    items-center justify-center">
                    <form onSubmit={handleFormSubmit}>
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4 placeholder:text-sm"
                            placeholder="First Name"
                            defaultValue={account?.first_name}
                            onChange={(e) => setFirst(e.target.value)}
                        />
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4 placeholder:text-sm"
                            placeholder="Last Name"
                            onChange={(e) => setLast(e.target.value)}
                            defaultValue={account?.last_name}
                        />
                        <input 
                        placeholder="email" 
                        required type="email" 
                        className="block border border-grey-light w-full p-3 rounded mb-4 placeholder:text-sm" 
                        defaultValue={account?.email}
                        onChange={(e) => setEmail(e.target.value)} 
                        
                        />
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4 placeholder:text-sm"
                            placeholder="Zipcode"
                            onChange={(e) => setZip(e.target.value)}
                            defaultValue={account?.zipcode}
                        />
                        <button className="bg-[#BB5855] mx-0 rounded text-[#FDECA9] text-sm py-1 px-4 relative inline-flex group items-center justify-center cursor-pointer" type="submit">Update</button>
                    </form>
                </div>
            </div>
        )
    };
};