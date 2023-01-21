import { useState, useEffect } from "react";
import React from "react";
import { useSelector } from 'react-redux'
import { useAuthContext } from '../Authentication/AuthenticateUser'

function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);
  const {token} = useAuthContext()

  const getData = async () => {
    const url = `${process.env.REACT_APP_PLATEMATE_API_HOST}/api/yelp/?location=${location}&budget=${budget}&open_at=${openAt}`
    const fetchConfig = {
      headers: {accept: 'application/json', "Content-Type": "application/json", Authorization: `Bearer ${token}`}}
      const resp = await fetch(url,fetchConfig)
      const data = await resp.json();
      console.log(data)
      setRestaurants(data.businesses.slice(0,4));
  };

    useEffect(() => {
        if (token) {getData()}
    }, [token])

    const yelpy = useSelector((state) => state.yelp.name)
    console.log(yelpy)
    const location = yelpy.zipcode
    const budget = yelpy.budget
    const openAt = yelpy.datetime
    console.log(location,budget,openAt)
  // const zipcode = useSelector((state) => state.zipcode.zipcode)
  // console.log(zipcode)


//   const getFilteredList = () => {
//     if (filter_person !== "") {
//       return salesRecords.filter((salesRecord) =>
//         salesRecord["sales_person"]["name"].includes(filter_person)
//       );
//     } else {
//       return salesRecords;
//     }
//   };

  return (
    <>
      {/* <div>
        <h3>Filter by Sales Person</h3>
        <select onChange={handleSalesPersonChange} className="form-select">
          <option value="">Choose a sales person</option>
          {sales_person.map((salesperson) => {
            return (
              <option key={salesperson.id} value={salesperson.name}>
                {salesperson.name}
              </option>
            );
          })}
        </select>
      </div> */}
      <div>
        <h1 className="text-center">Restaurants</h1>
        <table className="table table-hover table-striped">
          <thead className="text-center">
            <tr className="header">
              <th>Id</th>
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
            {restaurants.map((restaurant) => {
              return (
                <tr className="align-middle" key={restaurant.id}>
                  <td>{restaurant.id}</td>
                  <td>{restaurant.name}</td>
                  <td>{restaurant.display_phone}</td>
                  <td><img src= {restaurant.image_url}/></td>
                  <td>{restaurant.location.address1}</td>
                  <td>{restaurant.location.city}</td>
                  <td>{restaurant.location.zip_code}</td>
                  <td>{restaurant.price}</td>
                  <td>{restaurant.rating}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default RestaurantList;
