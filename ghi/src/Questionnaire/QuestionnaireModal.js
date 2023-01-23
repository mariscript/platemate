import { useDispatch, useSelector } from "react-redux";
import { storeYelp } from "../store/yelpVar";
import React, { useState, useEffect } from "react";
import { useAuthContext } from "../Authentication/AuthenticateUser";
import { useNavigate } from "react-router-dom";
import Select from "react-tailwindcss-select";

const options = [
  { value: "chinese", label: "🥢 Chinese" },
  { value: "pizza", label: "🍕 Pizza" },
  { value: "fast food", label: "🍔 Fast Food" },
  { value: "indian", label: "🍛 Indian" },
  { value: "mexican", label: "🌮 Mexican" },
  { value: "japanese", label: "🍣 Japanese" },
];

function QuestionModal() {
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    categories = categories.map((x) => x.value);
    datetime = `${datetime.slice(0, 10)} ${datetime.slice(
      11,
      13
    )}%3A${datetime.slice(14)}`;
    dispatch(storeYelp({ zipcode, budget, datetime, takeInOut, categories }));
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
      <div class="">
        <button
          type="button"
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalXl"
        ></button>
      </div>

      <div
        class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModalXl"
        tabindex="-1"
        aria-labelledby="exampleModalXlLabel"
        aria-modal="true"
        role="dialog"
      >
        <div class="modal-dialog modal-xl relative w-auto pointer-events-none">
          <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h1 className="flex justify-center items-center font-bold mt-5 text-3xl mb-5">
                Let's Find Your Plate!
              </h1>
              <button
                type="button"
                class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body relative p-4">
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
                    <div className="carousel-inner relative w-full overflow-hidden">
                      <div className="carousel-item active relative float-left w-full">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                          className="block w-full"
                          alt="..."
                        />
                        <div className="carousel-caption hidden md:block absolute text-center top-20">
                          <h1 className="flex justify-center font-bold mb-3 text-2xl">
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
                          src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
                          className="block w-full"
                          alt="..."
                        />
                        <div className="carousel-caption hidden md:block absolute text-center top-20">
                          <h1 className="flex justify-center font-bold mb-3 text-2xl">
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
                              <option value="5">🤑 ANY I GOT MONEY</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item relative float-left w-full">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                          className="block w-full"
                          alt="..."
                        />
                        <div className="carousel-caption hidden md:block absolute text-center top-20">
                          <h1 className="flex justify-center font-bold mb-3 text-2xl">
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
                          src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
                          className="block w-full"
                          alt="..."
                        />
                        <div className="carousel-caption hidden md:block absolute text-center top-20">
                          <h1 className="flex justify-center font-bold mb-3 text-2xl">
                            When are you eating?{" "}
                            <img
                              src={require("../images/clock.png")}
                              className="h-10 mx-2"
                            ></img>
                          </h1>
                          <div className="form-floating mb-3 mx-2">
                            <input
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
                          src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                          className="block w-full"
                          alt="..."
                        />
                        <div className="carousel-caption hidden md:block absolute text-center top-20">
                          <h1 className="flex justify-center font-bold mb-3 text-2xl">
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
                          src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                          className="block w-full"
                          alt="..."
                        />
                        <div className="carousel-caption hidden md:block absolute text-center top-20">
                          <div className="flex flex-col inline-flex py-2.5 px-5 mx-0 items-center">
                            <button
                              className="bg-[#C26866] hover:bg-[#FDECA9] text-white hover:text-black font-bold py-4 px-10 mb-3 w-60 rounded-full"
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

export default QuestionModal;

//dispatch(deleteCat(cat.id)
