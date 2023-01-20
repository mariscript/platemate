// import React, { useState, useEffect } from "react";
// import { useAuthContext, useToken } from '../Authentication/AuthenticateUser'
// import { Navigate, useNavigate } from "react-router-dom";

// function UpdateDietRestrict() {
//     const [diet_restrict, setDiet] = useState({});
//     const [ , , , , update] = useToken();
//     const {token} = useAuthContext()

//     const fetchDietRestrict = async () => {
//         const url = `${process.env.REACT_APP_PLATEMATE_API_HOST}/api/diet_restricts/me/`
//         const result = await fetch(url,{
//             headers: { Authorization: `Bearer ${token}`}, 
//         });
//         const data = await result.json();
//         setDiet(data)
//     }

//     useEffect(() => {
//         if (token) {
//             fetchDietRestrict()
//         }
//     }, [token]);

//     if (account || account !== undefined){
//         return(
//             <div>
//                 <h2 className="text-center">Hello {account.first_name}</h2>
//             </div>
//         )
//     };

// }
// export default UpdateDietRestrict