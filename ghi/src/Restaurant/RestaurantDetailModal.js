import RestaurantList from "./RestaurantList";
import React, { useState } from "react";
import {  useSelector } from "react-redux";
import { storeRestList } from "../store/restListState";

const RestaurantDetailModal = () => {
  const [showModal, setShowModal] = useState(false);
  const restaurants = useSelector((state) => state.restListState.restaurants)
  console.log(restaurants)
  return (
    <>
    <div className="items-center justify-center">
      <button
        type="button"
        onClick={() => setShowModal(true)}
        data-bs-toggle="modal"
        data-bs-target="#exampleModalCenteredScrollable"
        className=" flex justify-center items-center inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        Detail
      </button>
      </div>
      {showModal ? (
        <>
          <div
            className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
            id="exampleModalCenteredScrollable"
            tabIndex="-1"
            aria-labelledby="exampleModalCenteredScrollable"
            aria-modal="true"
            role="dialog"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
              <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                  <h5
                    className="text-xl font-medium leading-normal text-gray-800"
                    id="RestaurantDetail"
                  >
                    Restaurant Details
                  </h5>
                  <button
                    type="button"
                    onClick={()=>setShowModal(false)}
                    className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body relative p-4">
                  <div
                    id="carouselExampleControls"
                    className="carousel slide relative"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner relative w-full overflow-hidden">
                      <div className="carousel-item active relative float-left w-full h-96">
                        <img
                          src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                          className="block w-full object-contain"
                          alt="Wild Landscape"
                        />
                      </div>
                      <div className="carousel-item relative float-left w-full h-96">
                        <img
                          src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                          className="block w-full object-contain"
                          alt="Camera"
                        />
                      </div>
                      <div className="carousel-item relative float-left w-full h-96">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                          className="block w-full object-contain"
                          alt="Exotic Fruits"
                        />
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                      type="button"
                      data-bs-target="#carouselExampleControls"
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
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon inline-block bg-no-repeat"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                  <p>Restaurant Details </p>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <p>Just like that.</p>
                </div>
                <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                  <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                  >
                    Found my plate!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
export default RestaurantDetailModal;
