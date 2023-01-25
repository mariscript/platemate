import { useState, useEffect } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuthContext } from "../Authentication/AuthenticateUser";
import RestaurantDetailModal from "./RestaurantDetailModal";
import { storeRestList } from "../store/restListState";
import { storeDietNeeds } from "../store/dietNeedsSlice";

export default function RestaurantList({ test }) {
  const [restaurants, setRestaurants] = useState([]);
  const [id, setId] = useState("");
  const { token } = useAuthContext();
  const dispatch = useDispatch();
  const [tern, setTern] = useState(false);

  const getData = async () => {
    try {
      const url = `${process.env.REACT_APP_PLATEMATE_API_HOST}/api/yelp/?location=${location}&budget=${budget}&open_at=${openAt}`;
      const fetchConfig = {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const resp = await fetch(url, fetchConfig);
      const data = await resp.json();
      setRestaurants(data.businesses.slice(0, 3));
      setTern(true);
    } catch (e) {
      setTern(false);
    }
  };
  useEffect(() => {
    if (token) {
      getData();
    }
  }, [token]);
  useEffect(() => {
    if (test) {
      getData();
    }
  }, [test]);

  const yelpResponse = useSelector((state) => state.yelp.name);
  const location = yelpResponse.zipcode;
  const budget = yelpResponse.budget;
  const openAt = yelpResponse.datetime;

  const allergies = useSelector((state) => state.dietNeeds.allergy);
  const diet_restrict = useSelector((state) => state.dietNeeds.diet_restrict);
  console.log(allergies, diet_restrict);

  const handleId = (e) => {
    let value = e.target.value;
    setId(value);
  };

  return (
    <>
      <div className="flex justify-center mt-10 mb-5">
        <button
          type="button"
          className="inline-block px-10 py-6 bg-[#C26866] text-white font-medium text-xl leading-tight uppercase rounded-full shadow-md hover:bg-[#FDECA9] hover:shadow-lg hover:text-black focus:bg-[#C26866] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#C26866] active:shadow-lg transition duration-150 ease-in-out"
          data-bs-toggle="modal"
          data-bs-target="#questionnaire"
        >
          <span className="inline-block font-bold">
            Retake The Questionnaire!
          </span>
          <img
            src={require("../images/form.png")}
            alt="Loading..."
            className="inline-block w-9 ml-2"
          />
        </button>
      </div>
      <img
        src={require("../images/restaurant.png")}
        width="70px"
        className="mx-auto mt-10"
      />
      <h1 className="text-center font-bold mt-7 text-2xl mb-8">
        List of Restaurants
      </h1>
      <div className="flex justify-center gap-6">
        {tern ? (
          restaurants.map((restaurant) => (
            <div className="flex justify-center drop-shadow-md" key={restaurant.id}>
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <div className="relative rounded-lg bg-red-500 pb-2/3">
                  <img
                    className="absolute h-full w-full rounded-t-lg object-cover"
                    src={restaurant.image_url}
                    alt=""
                  />
                </div>
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    {restaurant.name}
                  </h5>
                  <p className="text-gray-700 text-base mb-4">
                    {restaurant.location.address1}, {restaurant.location.zip_code}
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
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
