import { useDispatch } from "react-redux";
import { storeYelp } from "../store/yelpVar";
import React, { useState, useEffect } from "react";
import { useAuthContext } from "../Authentication/AuthenticateUser";
import { useNavigate, useLocation } from "react-router-dom";
import Select from "react-tailwindcss-select";

const options = [
  { value: "chinese", label: "🥢 Chinese" },
  { value: "pizza", label: "🍕 Pizza" },
  { value: "fast%food", label: "🍔 Fast Food" },
  { value: "indian", label: "🍛 Indian" },
  { value: "mexican", label: "🌮 Mexican" },
  { value: "japanese", label: "🍣 Japanese" },
];

export default function QuestionModal({ refresh, setRefresh }) {
  const [account, setAccount] = useState({});
  const dispatch = useDispatch();
  const [zipcode, setZipcode] = useState("");
  const [budget, setBudget] = useState(0);
  let [datetime, setDateTime] = useState("");
  const [takeInOut, setTakeInOut] = useState("");
  let [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const { token } = useAuthContext();

  const handleChange = (e) => {
    const value = e.target.value;
    setZipcode(value);
  };

  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
  };

  const handleDateTimeChange = (e) => {
    setDateTime(e.target.value);
  };

  const handleTakeInOutChange = (e) => {
    setTakeInOut(e.target.value);
  };

  const handleCategoriesChange = (value) => {
    setCategories(value);
  };

  const location = useLocation();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (categories) {
      console.log(categories);
      categories = categories.map((category) => category.value);
      if (categories.length === 1) {
        categories = categories.toString();
      } else if (categories.length > 1) {
        let randomCat = Math.floor(Math.random() * (categories.length + 1));
        categories = categories[randomCat];
      }
    } else {
      categories = "";
    }
    console.log(categories);
    datetime = `${datetime.slice(0, 10)}%20${datetime.slice(
      11,
      13
    )}%3A${datetime.slice(14)}`;
    console.log(datetime);
    dispatch(storeYelp({ zipcode, budget, datetime, takeInOut, categories }));
    setRefresh(true);
    if (location.pathname === "/restaurants") {
    }
    navigate("/restaurants");
  };

  const fetchAccount = async () => {
    const url = `${process.env.REACT_APP_PLATEMATE_API_HOST}/api/accounts/me/`;
    const result = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await result.json();
    setAccount(data);
    setZipcode(data?.zipcode);
  };

  useEffect(() => {
    if (token) {
      fetchAccount();
      setZipcode(account?.zipcode);
    }
  }, [token]);

  return (
    <>
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="questionnaire"
        tabIndex="-1"
        aria-labelledby="questionnaire"
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-xl relative w-auto pointer-events-none max-w-screen-md">
          <div className="modal-content justify-center border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-[#FDECA9] bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header items-center p-2 border-b border-[#C26866] rounded-t-md">
              <h1 className="flex flex-col items-center font-bold mt-5 text-3xl mb-5">
                Let's Find Your Plate!
              </h1>
              {refresh && (
                <div
                  class="bg-green-100 border-t-4 border-green-500 rounded-b text-green-900 px-4 py-3 shadow-md mt-4 w-[450px] mx-auto"
                  role="alert"
                >
                  <div className="flex">
                    <div className="py-1">
                      <img
                        src={require("../images/bell.png")}
                        width="100px"
                        className="mr-3"
                      />
                    </div>
                    <div>
                      <h2 className="font-bold text-[20px] mr-2 ml-3">
                        Order Up!
                      </h2>
                      <h3 className="text-sm ml-3">
                        You may now close this window to see what tasty plates
                        await or might find the chicken of despair…
                      </h3>
                    </div>
                  </div>
                </div>
              )}
              <svg
                className="w-9 h-9 absolute top-3 right-2.5 text-black bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-[#FEF5ED] hover:text-white ease-linear transition-all duration-150 cursor-pointer"
                fillRule="currentColor"
                data-bs-dismiss="modal"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="modal-body relative p-4">
              <div>
                <div
                  id="carouselExampleCaptions"
                  className="carousel slide relative"
                  data-bs-interval="false"
                >
                  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="3"
                      aria-label="Slide 4"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="4"
                      aria-label="Slide 5"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="5"
                      aria-label="Slide 1"
                    ></button>
                  </div>
                  <form className="mx-auto" onSubmit={handleFormSubmit}>
                    <div className="carousel-inner relative overflow-y-auto overflow-hidden">
                      <div className="carousel-item active relative float-left w-full">
                        <img
                          src={require("../images/plate1.jpg")}
                          className="block w-full blur-sm"
                          alt="..."
                        />
                        <div className="carousel-caption hidden md:block absolute text-center top-20 ">
                          <h1 className="flex justify-center font-bold mb-3 text-2xl bg-[#F6F2ED] text-black py-2 w-[320px] items-center mx-auto rounded-lg">
                            Your Current Location{" "}
                            <img
                              src={require("../images/location.png")}
                              className="h-10 mx-2"
                            ></img>
                          </h1>
                          <div className="mb-3">
                            <input
                              onChange={handleChange}
                              required
                              type="search"
                              name="zipcode"
                              id="zipcode"
                              className="block border border-grey-light w-full p-3 rounded mb-4 placeholder:text-sm text-black"
                              defaultValue={account?.zipcode}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item relative float-left w-full">
                        <img
                          src={require("../images/plate2.jpg")}
                          className="block w-full blur-sm"
                          alt="..."
                        />
                        <div className="carousel-caption hidden md:block absolute text-center top-20">
                          <h1 className="flex justify-center font-bold mb-3 text-2xl bg-[#F6F2ED] text-black py-2 w-[260px] items-center mx-auto rounded-lg">
                            Your Budget{" "}
                            <img
                              src={require("../images/dollars.png")}
                              className="h-10 mx-2"
                            ></img>
                          </h1>
                          <div className="form-floating mb-3">
                            <select
                              required
                              value={budget}
                              onChange={handleBudgetChange}
                              className="block border border-grey-light w-full p-3 rounded mb-4 placeholder:text-sm text-black"
                            >
                              <option value="">Select One</option>
                              <option value="1">💸 $ ($1-10)</option>
                              <option value="2">💳 $$ ($11-30)</option>
                              <option value="3">💵 $$$ ($31-60)</option>
                              <option value="4">💰 $$$$ ($61+)</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item relative float-left w-full">
                        <img
                          src={require("../images/plate3.jpg")}
                          className="block w-full blur-sm"
                          alt="..."
                        />
                        <div className="carousel-caption hidden md:block absolute text-center top-20">
                          <h1 className="flex justify-center font-bold mb-3 text-2xl bg-[#F6F2ED] text-black py-2 w-[400px] items-center mx-auto rounded-lg">
                            Carry Out{" "}
                            <img
                              src={require("../images/takeout.png")}
                              className="h-10 mx-2"
                            ></img>{" "}
                            or Delivery?{" "}
                            <img
                              src={require("../images/car.png")}
                              className="h-12 mx-2"
                            ></img>
                          </h1>
                          <div className="items-center form-floating mb-3 mx-2">
                            <select
                              required
                              value={takeInOut}
                              onChange={handleTakeInOutChange}
                              className="block border border-grey-light w-full p-3 rounded mb-4 placeholder:text-sm text-black"
                            >
                              <option value="">Select One</option>
                              <option value="pickup">🥡 Pickup</option>
                              <option value="delivery">🚗 Delivery</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item relative float-left w-full">
                        <img
                          src={require("../images/plate4.jpg")}
                          className="block w-full blur-sm"
                          alt="..."
                        />
                        <div className="carousel-caption hidden md:block absolute text-center top-20">
                          <h1 className="flex justify-center font-bold mb-3 text-2xl bg-[#F6F2ED] text-black py-2 w-[320px] items-center mx-auto rounded-lg">
                            When are you eating?{" "}
                            <img
                              src={require("../images/clock.png")}
                              className="h-10 mx-2"
                            ></img>
                          </h1>
                          <div className="form-floating mb-3 mx-2">
                            <input
                              id="date"
                              required
                              type="datetime-local"
                              value={datetime}
                              onChange={handleDateTimeChange}
                              className="block border border-grey-light w-full p-3 rounded mb-4 placeholder:text-sm text-black"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item relative float-left w-full">
                        <img
                          src={require("../images/plate5.jpg")}
                          className="block w-full blur-sm"
                          alt="..."
                        />
                        <div className="carousel-caption hidden md:block absolute text-center top-20">
                          <h1 className="flex justify-center font-bold mb-3 text-2xl bg-[#F6F2ED] text-black py-2 w-[320px] items-center mx-auto rounded-lg">
                            Pick Your Preferences
                            <img
                              src={require("../images/dinner.png")}
                              className="h-10 mx-2"
                            ></img>
                          </h1>
                          <div className="form-floating mb-3 mx-2">
                            <div className="">
                              <Select
                                className="block border border-grey-light w-full p-3 rounded mb-4 placeholder:text-sm"
                                value={categories}
                                onChange={handleCategoriesChange}
                                isMultiple={true}
                                options={options}
                                searchInputPlaceholder
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="carousel-item relative float-left w-full">
                        <img
                          src={require("../images/plate6.jpg")}
                          className="blur-sm"
                          alt="..."
                        />
                        <div className="carousel-caption hidden md:block absolute text-center top-20">
                          <button
                            className="bg-[#C26866] hover:bg-[#FDECA9] text-white hover:text-black font-bold py-5 px-10 -mt-5 w-[200px] rounded-full"
                            type="submit"
                          >
                            {" "}
                            Ready to Eat!
                            <span className="inline-flex items-center justify-center">
                              <img
                                src={require("../images/foodplate.png")}
                                className="h-15 m-2"
                              ></img>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>

                  <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon inline-block bg-no-repeat"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon inline-block bg-no-repeat"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
