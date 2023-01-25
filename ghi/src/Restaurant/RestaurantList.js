import { useState, useEffect } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuthContext } from "../Authentication/AuthenticateUser";
import RestaurantDetailModal from "./RestaurantDetailModal";
import { storeRestList } from "../store/restListState";
import { storeDietNeeds } from "../store/dietNeedsSlice";

export default function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);
  const [id, setId] = useState("");
  const { token } = useAuthContext();
  const [categories,setCategories] = useState("")
  const [allergyEntry, setAllergies] = useState("")
  const [dietRestrictEntry, setDietRestrict] = useState("")



  const allergies = useSelector((state) => state.dietNeeds.name.allergy);
  const diet_restrict = useSelector((state) => state.dietNeeds.name.diet_restrict);
  const yelpResponse = useSelector((state) => state.yelp.name);
  const location = yelpResponse.zipcode;
  const budget = yelpResponse.budget;
  const openAt = yelpResponse.datetime;
  const yelpCat = yelpResponse.categories

  function dietNeedsFilter(){
    let dietRestrictEntries = (Object.entries(diet_restrict)).filter((entry) =>  entry[1] === true)
    let allergiesEntries = (Object.entries(allergies)).filter((entry) =>  entry[1] === true)
    setAllergies(allergiesEntries)
    setDietRestrict(dietRestrictEntries)
  }

    function changeCatString(){
      let finalString = ""
      for (let category of yelpCat){
        let stringCategory = `&categories=${category.toString()}`
        finalString += stringCategory
      }
      return finalString
    }
    console.log(categories)

    const getData = async () => {
      const url = `${process.env.REACT_APP_PLATEMATE_API_HOST}/api/yelp?location=${location}&budget=${budget}&open_at=${openAt}${changeCatString()}`;
      console.log(url)
      // const url = 'http://localhost:8000/api/yelp?location=78664&budget=1&open_at=2023-01-24%2018%3A44&categories=chinese'
                      // http://localhost:8000/api/yelp?location=78664&budget=1&open_at=2023-01-25%2012%3A00&categories=chinese
      const fetchConfig = {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const resp = await fetch(url, fetchConfig);
      const data = await resp.json();
      console.log(data)
      setRestaurants(data?.businesses.slice(0,3));
    };


    useEffect(() => {
      if (token) {
        changeCatString()
        console.log("inside useEffect call", changeCatString())
        getData();
      }
    }, []);

    //   const handleId = (e) => {
  //     let value = e.target.value;
  //     setId(value)
  // }



  return (
    <>
      <img
        src={require("../images/restaurant.png")}
        width="70px"
        className="mx-auto mt-10"
      />
      <h1 className="text-center font-bold mt-7 text-2xl mb-8">
        List of Restaurants
      </h1>
      <div className="flex justify-center gap-6">
        {restaurants.length > 0 ? (
          restaurants.map((restaurant) => (
            <div
              className="rounded-lg shadow-lg bg-white max-w-sm"
              key={restaurant.id}
            >
              <div className="w-96 h-96">
                <img
                  src={restaurant.image_url}
                  className="rounded-t-lg object-contain"
                  alt=""
                />
              </div>
              <div className="p-6 justify-center">
                <h5 className="text-gray-900 text-xl font-medium mb-2 justify-center content-center">
                  {restaurant.name}{" "}
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  {" "}
                  {restaurant.location.address1}
                </p>
                <p className="text-gray-700 text-base mb-4">
                  {restaurant.location.zipcode}
                </p>
                <p className="text-gray-700 text-base mb-4">
                  {restaurant.display_phone}
                </p>
                <p className="text-gray-700 text-base mb-4">
                  <a
                    href={restaurant.url}
                    className="underline hover:text-sky-700"
                  >
                    Website
                  </a>
                </p>
              </div>
              <RestaurantDetailModal />
            </div>
          ))
        ) : (
          <div className="relative justify-center">
            <img
              className="flex justify-center ml-16"
              src={require("../images/chicken.gif")}
              alt="Surprised Chicken"
            />
            <div className="rounded-lg shadow-xl bg-white max-w-sm">
              <div className="flex flex-col items-center p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  Whoops!
                </h5>
                <h1 className="mb-4">
                  We couldn't find restaurants with your answers. Make sure to
                  fill out every question! Try the questionnaire again, so we
                  can find your plate!
                </h1>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#questionnaire"
                  type="button"
                  className="px-6 py-2.5 mt-2 bg-[#C26866] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:[#FDECA9] hover:shadow-lg hover:text-black focus:[#C26866] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-white active:shadow-lg transition duration-150 ease-in-out"
                >
                  Try Another Plate!
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
