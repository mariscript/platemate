import { useState, useEffect } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuthContext } from "../Authentication/AuthenticateUser";
import RestaurantDetail from "./RestaurantDetail";
import { storeRestList } from "../store/restListState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export default function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);
  const [id, setId] = useState("");
  const { token } = useAuthContext();
  const [dietNeeds, setDietNeeds] = useState("");
  const [noDietNeeds, setNoDietNeeds] = useState("&categories=");
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
  const dietRestrict = useSelector(
    (state) => state.dietNeeds.name.diet_restrict
  );
  const yelpResponse = useSelector((state) => state.yelp.name);
  const location = yelpResponse.zipcode;
  const budget = yelpResponse.budget;
  const openAt = yelpResponse.datetime;
  const yelpCat = yelpResponse.categories;

  function dietNeedsFilter() {
    console.log("dietRestrict being called");
    if (token) {
      let dietRestrictEntries = Object.entries(dietRestrict).filter(
        (entry) => entry[1] === true
      );
      let allergiesEntries = Object.entries(allergies).filter(
        (entry) => entry[1] === true
      );
      let concatDietNeeds = dietRestrictEntries.concat(allergiesEntries);
      console.log(concatDietNeeds);
      let dietNeeds = concatDietNeeds.filter(
        (notSeafood) => notSeafood[0] !== "seafood"
      );
      let filterString = "";
      let finalFilterString = "";
      for (let stringNeed of dietNeeds) {
        let need = stringNeed[0].toString();
        filterString = `%26categories%3D${need}`;
        finalFilterString += filterString;
      }
      setDietNeeds(finalFilterString);
    }
  }

  useEffect(() => {
    dietNeedsFilter();
  }, [token, allergies, dietRestrict]);

  const getRestaurants = async () => {
    console.log("I am being called");
    let errorFound = false;
    try {
      let url = "";
      if (dietNeeds) {
        url = `${process.env.REACT_APP_PLATEMATE_API_HOST}/api/yelp?location=${location}&budget=${budget}&open_at=${openAt}&term=${yelpCat}&diet_needs=${dietNeeds}`;
      } else {
        url = `${process.env.REACT_APP_PLATEMATE_API_HOST}/api/yelp?location=${location}&budget=${budget}&open_at=${openAt}&term=${yelpCat}&diet_needs=${noDietNeeds}`;
      }
      console.log(url);
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
      getRestaurants();
      dispatch(storeRestList({ restaurants }));
    }
  }, [token, dietNeeds, yelpResponse]);

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
                  className="flex justify-center drop-shadow-md shadow-2xl inset-0 rounded-lg border-4 border-[#C26866] hover:translate-x-0 hover:translate-y-0"
                  key={restaurant?.id}
                >
                  <div className="transition duration-300 rounded-lg inset-0 ease-out transform -translate-x-3 -translate-y-3 hover:translate-x-0 hover:translate-y-0">
                    <div className="text-center rounded-lg shadow-lg bg-[#f2efef] w-[400px]">
                      <div className="relative rounded-lg bg-black pb-2/3">
                        <img
                          className="absolute h-full w-full rounded-t-lg object-cover"
                          src={restaurant?.image_url}
                          alt=""
                        />
                      </div>
                      <div className="p-6">
                        <h5 className="text-gray-900 text-2xl font-bold mb-4">
                          {restaurant?.name}
                        </h5>

                        <button
                          className="relative px-5 py-3 overflow-hidden font-medium text-black bg-[#F0C797] hover:bg-[#c26866] hover:text-white border border-gray-100 rounded-lg shadow-inner group"
                          onClick={selectionMade}
                          value={restaurant?.id}
                        >
                          DETAILS{" "}
                          <FontAwesomeIcon
                            icon={faCircleInfo}
                            className="ml-2 fa-lg"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div style={{ display: "grid", placeItems: "center" }}>
              <RestaurantDetail idData={id} />
              <button onClick={selectionMade}>
                <a className="relative inline-flex items-center justify-center p-5 px-2 py-2 overflow-hidden font-medium text-[#C26866] transition duration-300 ease-out border-2 border-[#C26866] rounded-full shadow-md group">
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 translate-x-full bg-[#C26866] group-hover:-translate-x-0 ease">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        transform="rotate(180 12 12)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 -transform group-hover:translate-x-full ease">
                    <img src={require("../images/arrow.png")} className="w-5" />
                  </span>
                  <span className="relative invisible">Button Text</span>
                </a>
              </button>
            </div>
          </>
        )}
      </>
    );
  }
}
