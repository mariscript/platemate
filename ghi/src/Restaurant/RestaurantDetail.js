import React from "react";
import { useState, useEffect } from "react";
import { useAuthContext } from "../Authentication/AuthenticateUser";

export default function RestaurantDetail({ idData }) {
  const { token } = useAuthContext();
  const [restaurant, setRestaurant] = useState("");
  const [review, setReview] = useState("");

  const getDataById = async () => {
    const url = `${process.env.REACT_APP_PLATEMATE_API_HOST}/api/yelp/${idData}`;
    const resp = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await resp.json();
    setRestaurant(data);
  };

  const getReview = async () => {
    const url = `${process.env.REACT_APP_PLATEMATE_API_HOST}/api/yelp/review/${idData}`;
    const resp = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await resp.json();
    setReview(data);
  };

  useEffect(() => {
    getDataById();
    getReview();
  }, [idData]);

  if (restaurant && review) {
    return (
      <>
        <div className="flex mb-5">
          <div className="justify-center drop-shadow-md mt-10">
            <div className="rounded-lg w-[450px] h-[200px]">
              <div className="relative rounded-lg bg-[#C26866]-500">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide relative"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      class="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 0"
                    ></button>
                  </div>
                  <div className="carousel-inner relative w-full overflow-hidden">
                    <div className="carousel-item active float-left w-full">
                      <img
                        src={restaurant?.photos[0]}
                        className="block w-full rounded-lg"
                        alt="#"
                      />
                    </div>
                    <div className="carousel-item float-left w-full">
                      <img
                        src={restaurant?.photos[1]}
                        className="block w-full rounded-lg"
                        alt="#"
                      />
                    </div>
                    <div className="carousel-item float-left w-full">
                      <img
                        src={restaurant?.photos[2]}
                        className="block w-full rounded-lg"
                        alt="#"
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
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
                    data-bs-target="#carouselExampleIndicators"
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

          <div className="rounded-lg shadow-lg bg-white w-full h-[600px] max-w-sm mx-auto p-5 ml-5 mt-10">
            <h2 className="text-gray-900 text-2xl font-bold mb-5 text-center">
              {restaurant.name}
            </h2>

            <div className="text-center">
              <h2 className="mb-3 ml-3 text-lg">
                <h2 className="text-gray-700 text-base mb-2">
                  {restaurant?.location.address1} {restaurant?.location.city},{" "}
                  {restaurant?.location.state} {restaurant?.location.zip_code}
                </h2>
                <h2 className="text-gray-700 text-base mb-6">
                  {restaurant?.display_phone}
                </h2>
                <div className="flex items-center ml-[60px] -mt-2">
                  {Array.from({ length: restaurant.rating }, (_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 mr-1 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.556.162.776.35a1.514 1.514 0 0 1 .475.698 1.514 1.514 0 0 1-.39 1.574l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.112.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" />
                    </svg>
                  ))}
                  {restaurant.rating} out of 5
                </div>
              </h2>
              <div className="flex"></div>
            </div>

            <div className="">
              <img
                src={require("../images/reviews.png")}
                width="40px"
                className="ml-3 mb-3"
              />

              <h2 className="p-6 mb-3 bg-gray-100 rounded-lg text-sm">
                "{review.reviews[0].text}"
              </h2>
              <h2 className="p-6 mb-8 bg-gray-100 rounded-lg text-sm">
                "{review.reviews[1].text}"
              </h2>
            </div>

            <div className="flex justify-center">
              <a
                href={restaurant.url}
                className="relative px-6 py-3 font-bold text-black group -mt-2"
                target="_blank"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-[#FABB72] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                <span className="relative">Website</span>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
