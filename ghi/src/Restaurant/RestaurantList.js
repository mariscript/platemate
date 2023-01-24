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
  const dispatch = useDispatch();

  const getData = async () => {
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
  };
  useEffect(() => {
    if (token) {
      getData();
    }
  }, [token]);

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
          <h1>
            Whoops! We couldn't find restaurants with your answers. Try the
            questionnaire again, so we can find your plate!
          </h1>
        )}
      </div>
    </>
  );
}
