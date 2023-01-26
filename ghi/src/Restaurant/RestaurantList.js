import { useState, useEffect } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuthContext } from "../Authentication/AuthenticateUser";
import RestaurantDetail from "./RestaurantDetail";
import { storeRestList } from "../store/restListState";
import { storeDietNeeds } from "../store/dietNeedsSlice";

export default function RestaurantList({ refresh }) {
  const [restaurants, setRestaurants] = useState([]);
  const [id, setId] = useState("");
  const { token } = useAuthContext();
  const [categories, setCategories] = useState("");
  const [allergyEntry, setAllergies] = useState("");
  const [dietRestrictEntry, setDietRestrict] = useState("");
  const dispatch = useDispatch();
  const [selection, setSelectionMade] = useState(false);

  const selectionMade = (e) => {
    if (selection) {
      setSelectionMade(false);
    } else {
      setSelectionMade(true);
      setId(e.target.value);
    }
  };

  const [load, setLoad] = useState({
    completed: false,
    issue: false,
  });

  const allergies = useSelector((state) => state.dietNeeds.name.allergy);
  const diet_restrict = useSelector(
    (state) => state.dietNeeds.name.diet_restrict
  );
  const yelpResponse = useSelector((state) => state.yelp.name);
  const location = yelpResponse.zipcode;
  const budget = yelpResponse.budget;
  const openAt = yelpResponse.datetime;
  const yelpCat = yelpResponse.categories;
  console.log(yelpCat);

  function dietNeedsFilter() {
    let dietRestrictEntries = Object.entries(diet_restrict).filter(
      (entry) => entry[1] === true
    );
    let allergiesEntries = Object.entries(allergies).filter(
      (entry) => entry[1] === true
    );
    setAllergies(allergiesEntries);
    setDietRestrict(dietRestrictEntries);
  }

  // function changeCatString() {
  //   if (yelpCat.length > 1) {
  //     let randomCat = Math.floor(Math.random() * (yelpCat.length + 1));
  //     setFinalString(yelpCat[randomCat]);
  //   } else if (yelpCat.length === 1) {
  //     setFinalString(yelpCat.toString());
  //   }
  // }
  // console.log(finalString);

  const getRestaurants = async () => {
    console.log("I am being called");
    let errorFound = false;
    try {
      const url = `${process.env.REACT_APP_PLATEMATE_API_HOST}/api/yelp?location=${location}&budget=${budget}&open_at=${openAt}&term=${yelpCat}`;
      console.log(url);
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
      setRestaurants(data.businesses.slice(0, 3));
      if (data.businesses.length === 0) {
        errorFound = true;
      }
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
      console.log("useeffect to get restaurants after string exists");
      getRestaurants();
      dispatch(storeRestList({ restaurants }));
    }
  }, [token, yelpResponse]);

  // useEffect(() => {
  //   if (refresh) {
  //     console.log("cooper's refresh code");
  //     getRestaurants();
  //   }
  // }, [refresh, yelpCat]);

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
        <div className="relative justify-center flex-col">
          <div className="relative justify-center flex">
            <img
              className="flex justify-center mx-auto mb-2"
              src={require("../images/chicken.gif")}
              alt="Surprised Chicken"
            />
          </div>
          <div className="rounded-3xl shadow-xl bg-white max-w-[400px] h-[230px] mx-auto">
            <div className="flex flex-col items-center p-6">
              <h5 className="text-gray-900 text-xl font-bold mb-8">
                Whoops Mate!
                <img
                  src={require("../images/alarm.png")}
                  alt="Loading..."
                  className="inline-block w-10 ml-2"
                />
              </h5>
              <h2 className="text-center">
                We couldn't find restaurants with your answers. Make sure to
                fill out every question! Try the questionnaire again, so we can
                find your plate!
              </h2>
            </div>
          </div>
        </div>
      </>
    );
  }
  if (load.completed) {
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
        {!selection ? (
          <>
            <img
              src={require("../images/restaurant.png")}
              width="70px"
              className="mx-auto mt-10"
            />
            <h1 className="text-center font-md mt-7 text-5xl mb-8">
              List of Restaurants
            </h1>
            <div className="flex justify-center gap-6">
              {restaurants.map((restaurant) => (
                <div
                  className="flex justify-center drop-shadow-md"
                  key={restaurant.id}
                >
                  <div className="rounded-lg shadow-lg bg-white w-[400px]">
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
                        {restaurant.location.address1},{" "}
                        {restaurant.location.zip_code}
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
                      <button
                        className="text-[#BB5855] mx-6 rounded text-sm outline outline-offset-4 outline-2 py-0 px-4 relative font-semibold text-center no-underline transition-all duration-300 ease-in-out cursor-pointer hover:text-[#bb58557c]"
                        onClick={selectionMade}
                        value={restaurant.id}
                      >
                        PICK ME
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div>
              <RestaurantDetail idData={id} />
            </div>
            <button
              onClick={selectionMade}
              className="text-[#BB5855] mx-6 rounded text-sm outline outline-offset-4 outline-2 py-0 px-4 relative font-semibold text-center no-underline transition-all duration-300 ease-in-out cursor-pointer hover:text-[#bb58557c]"
            >
              Go back to your results
            </button>
          </>
        )}
      </>
    );
  }
}
