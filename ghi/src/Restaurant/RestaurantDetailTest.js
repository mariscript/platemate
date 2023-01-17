import { useState, useEffect } from "react";
import React from "react";
import { useAuthContext } from '../Authentication/AuthenticateUser'

function RestaurantDetail() {
  const [restaurant, setRestaurant] = useState({});
  const [id,setId] = useState()
  const [value, setSearchVal] = useState("")
  const {token} = useAuthContext()

  const getData = async () => {
    const url = `${process.env.REACT_APP_PLATEMATE_API_HOST}/api/yelp/${id}`
    const resp = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },});
    const data = await resp.json();
    setRestaurant(data[1])
  };

    useEffect(() => {
        if (token && id){getData()}
    }, [token,id]);


  const handleValueChange = (e) => {
    e.preventDefault();
    setSearchVal(e.target.value)
  }
  const handleSearchChange = (e) => {
    e.preventDefault();
    setId(value);
  };


 if (restaurant || restaurant !== undefined){
  return (
    <>
      <input
          id="searchBar"
          onChange= {handleValueChange}
          type="search"
          placeholder="Search here"
        />
    <button onClick = {handleSearchChange}> Search</button>
      <div>
        <h1 className="text-center">Restaurants</h1>
        <table className="table table-hover table-striped">
          <thead className="text-center">
            <tr className="header">
              <th>Name</th>
              <th>Phone Number</th>
              <th>Photo</th>
              <th>Address1</th>
              <th>City</th>
              <th>Zipcode</th>
              <th>Price</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody className="text-center">
        <tr className="align-middle">
        <td>{restaurant.name}</td>
        <td>{restaurant.display_phone}</td>
        <td><img src= {restaurant.image_url}/></td>
        <td>{restaurant?.location?.address1}</td>
        <td>{restaurant?.location?.city}</td>
        <td>{restaurant?.location?.zip_code}</td>
        <td>{restaurant.price}</td>
        <td>{restaurant.rating}</td>
    </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
else{
    return (
        <>
        <input
          id="searchBar"
          onChange= {handleValueChange}
          type="search"
          placeholder="Search here"
        />
        <button onClick = {handleSearchChange}> Search</button>
        </>

    )
    }
}
export default RestaurantDetail;
