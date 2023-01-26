import { useState, useEffect } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuthContext } from "../Authentication/AuthenticateUser";
import RestaurantDetailModal from "./RestaurantDetailModal";
import { storeRestList } from "../store/restListState";
import { storeDietNeeds } from "../store/dietNeedsSlice";

export default function RestaurantList({ refresh }) {
  const [restaurants, setRestaurants] = useState([]);
  const [id, setId] = useState("");
  const { token } = useAuthContext();
  const dispatch = useDispatch();
  const [load, setLoad] = useState({
    completed: false,
    issue: false,
  });

  const getData = async () => {
    let errorFound = false;
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
    } catch (e) {
      errorFound = true;
    }
    setLoad({
      completed: true,
      issue: errorFound,
    });
  };
  useEffect(() => {
    if (token) {
      getData();
    }
  }, [token]);
  useEffect(() => {
    if (refresh) {
      getData();
    }
  }, [refresh]);

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

  if (!load.completed) {
    return;
  }

  if (load.issue) {
    return (
      <>
        <div className="flex justify-center mt-10 mb-5">
          <button
            type="button"
            className="inline-block px-10 py-6 bg-[#C26866] text-white font-medium text-xl leading-tight uppercase rounded-full shadow-md hover:bg-[#FDECA9] hover:shadow-lg hover:text-black focus:bg-[#C26866] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#C26866] active:shadow-lg transition duration-150 ease-in-out mb-10"
            data-bs-toggle="modal"
            data-bs-target="#questionnaire"
          >
            <span className="inline-block font-bold">
              Take The Questionnaire!
            </span>
            <img
              src={require("../images/form.png")}
              alt="Loading..."
              className="inline-block w-9 ml-2"
            />
          </button>
        </div>
        <div className="relative justify-center flex">
          <img
            className="flex justify-center ml-16"
            src={require("../images/chicken.gif")}
            alt="Surprised Chicken"
          />
          <div className="rounded-lg shadow-xl bg-white max-w-[400px]">
            <div className="flex flex-col items-center p-6">
              <h5 className="text-gray-900 text-xl font-bold mb-8">
                Whoops Mate!
                <img
                  src={require("../images/alarm.png")}
                  alt="Loading..."
                  className="inline-block w-10 ml-2"
                />
              </h5>
              <h1 className="text-center">
                We couldn't find restaurants with your answers. Make sure to
                fill out every question! Try the questionnaire again, so we can
                find your plate!
              </h1>
            </div>
          </div>
        </div>
      </>
    );
  }

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
            Take The Questionnaire!
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
        {restaurants.map((restaurant) => (
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
        ))}
      </div>
    </>
  );
}
