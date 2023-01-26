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
            data-bs-toggle="modal"
            data-bs-target="#questionnaire"
            className="relative inline-flex items-center justify-start px-10 py-6 overflow-hidden font-bold transition-all bg-[#C26866] rounded-2xl group text-xl"
          >
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#FDECA9] rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#FDECA9] rounded-2xl group-hover:mb-20 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-black">
              TAKE THE QUESTIONNAIRE!
              <img
                src={require("../images/form.png")}
                alt="Loading..."
                className="inline-block w-9 ml-2"
              />
            </span>
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
            data-bs-toggle="modal"
            data-bs-target="#questionnaire"
            className="relative inline-flex items-center justify-start px-10 py-6 overflow-hidden font-bold transition-all bg-[#C26866] rounded-2xl group text-xl"
          >
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#FDECA9] rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#FDECA9] rounded-2xl group-hover:mb-20 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-black">
              TAKE THE QUESTIONNAIRE!
              <img
                src={require("../images/form.png")}
                alt="Loading..."
                className="inline-block w-9 ml-2"
              />
            </span>
          </button>
        </div>
        {!selection ? (
          <>
            <img
              src={require("../images/restaurant.png")}
              width="70px"
              className="mx-auto mt-10"
            />
            <h1 className="text-center mt-7 mb-8 text-[40px] mr-2 tracking-[4px]">
              List of Restaurants
            </h1>
            <div className="flex justify-center gap-6">
              {restaurants.map((restaurant) => (
                <div
                  className="flex justify-center border-black drop-shadow-md"
                  key={restaurant.id}
                >
                  <div className="text-center rounded-lg shadow-lg bg-[#f2efef] w-[400px]">
                    <div className="relative rounded-lg bg-black pb-2/3">
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
                      <p className="text-gray-700 text-base mb-2">
                        {restaurant.location.address1},{" "}
                        {restaurant.location.zip_code}
                      </p>
                      <p className="text-gray-700 text-base mb-6">
                        {restaurant.display_phone}
                      </p>

                      <button
                        className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-[#F0C797] border border-gray-100 rounded-lg shadow-inner group"
                        onClick={selectionMade}
                        value={restaurant.id}
                      >
                        <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                        <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                        <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                        <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                        <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                        <span class="relative transition-colors text-black duration-300 delay-200 group-hover:text-white ease">
                          DETAILS
                        </span>
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
