import { useToken, useAuthContext } from "./Authentication/AuthenticateUser";

export default function MainPage() {
  const { token } = useAuthContext();

  if (!token) {
    return (
      <>
        <div className="bg-[#C6D3BE] mx-auto rounded-3xl max-w-7xl">
          <div className="flex justify-center mx-auto px-auto mt-10">
            <h1 className="font-medium text-5xl font-montserrat animated">
              Welcome to PlateMate
            </h1>
          </div>
          <div className="flex justify-center mx-auto px-auto mt-2">
            <h2 className="font-bold text-m font-sans">
              Sign up to be a Mate, so we can help you find your Plate!
            </h2>
          </div>

          <div
            id="carouselDarkVariant"
            className="mx-auto max-w-6xl carousel slide carousel-fade carousel-dark relative -mt-10"
            data-bs-ride="carousel"
          >
            {/* indicators */}
            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
              <button
                data-bs-target="#carouselDarkVariant"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                data-bs-target="#carouselDarkVariant"
                data-bs-slide-to="1"
                aria-label="Slide 1"
              ></button>
              <button
                data-bs-target="#carouselDarkVariant"
                data-bs-slide-to="2"
                aria-label="Slide 1"
              ></button>
              <button
                data-bs-target="#carouselDarkVariant"
                data-bs-slide-to="3"
                aria-label="Slide 1"
              ></button>
              <button
                data-bs-target="#carouselDarkVariant"
                data-bs-slide-to="4"
                aria-label="Slide 1"
              ></button>
            </div>

            {/* inner */}
            <div className="carousel-inner relative w-full overflow-hidden h-2/4">
              {/* item 0 */}
              <div className="carousel-item active relative float-left w-full">
                <img
                  src={require("./images/morimoto.jpg")}
                  className="block w-screen scale-75 rounded-3xl"
                  alt="Morimotos"
                />
                <div className="carousel-caption hidden md:block absolute text-center bg-[#FDECA9] mx-auto w-96 rounded-3xl">
                  <h5 className="text-xl font-bold -mt-3">
                    Don't know where to eat?
                  </h5>
                  <p className="">PlateMate will help you choose!</p>
                </div>
              </div>
              {/* item 1 */}
              <div className="carousel-item relative float-left w-full">
                <img
                  src={require("./images/rebelcheese.jpg")}
                  className="block w-screen scale-75 rounded-3xl shadow-2xl"
                  alt="Rebel Cheese"
                />
                <div className="carousel-caption hidden md:block absolute text-center bg-[#FDECA9] mx-auto w-96 rounded-3xl">
                  <h5 className="text-xl font-bold -mt-3">
                    Sign up to take the Questionnaire!
                  </h5>
                  <p>We'll help you find the right plate.</p>
                </div>
              </div>
              {/* item 2 */}
              <div className="carousel-item relative float-left w-full">
                <img
                  src={require("./images/SUGARFISH.jpg")}
                  className="block w-screen scale-75 rounded-3xl"
                  alt="Sugarfish Sushi"
                />
                <div className="carousel-caption hidden md:block absolute text-center bg-[#FDECA9] mx-auto w-96 rounded-3xl">
                  <h5 className="text-xl font-bold -mt-3">
                    Eating now? Eating later?
                  </h5>
                  <p>No problem, let us know in the questionnaire!</p>
                </div>
              </div>
              {/* item 3 */}
              <div className="carousel-item relative float-left w-full">
                <img
                  src={require("./images/gyukaku.jpg")}
                  className="box w-screen scale-75 rounded-3xl"
                  alt="Gyukaku"
                />
                <div className="carousel-caption hidden md:block absolute text-center bg-[#FDECA9] mx-auto w-96 rounded-3xl">
                  <h5 className="text-xl font-bold -mt-3">
                    Eating on a budget?
                  </h5>
                  <p>We'll find the plate for you!</p>
                </div>
              </div>
              {/* item 4 */}
              <div className="carousel-item relative float-left w-full">
                <img
                  src={require("./images/italian.jpg")}
                  className="block w-screen scale-75 rounded-3xl"
                  alt="Italian Food"
                />
                <div className="carousel-caption hidden md:block absolute text-center bg-[#FDECA9] mx-auto w-96 rounded-3xl">
                  <h5 className="text-xl font-bold -mt-3">
                    Have restrictions or allergies?
                  </h5>
                  <p>Sign up to edit your profile!</p>
                </div>
              </div>
            </div>

            {/* carousel controls */}
            <button
              className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
              type="button"
              data-bs-target="#carouselDarkVariant"
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
              data-bs-target="#carouselDarkVariant"
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
      </>
    );
  } else {
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
              src={require("./images/form.png")}
              alt="Loading..."
              className="inline-block w-9 ml-2"
            />
          </button>
        </div>
        <div className="bg-[#C6D3BE] mx-auto rounded-3xl max-w-7xl max-h-lg">
          <div
            id="carouselDarkVariant"
            className="carousel slide carousel-fade carousel-dark relative -mt-10"
            data-bs-ride="carousel"
          >
            {/* indicators */}
            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
              <button
                data-bs-target="#carouselDarkVariant"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                data-bs-target="#carouselDarkVariant"
                data-bs-slide-to="1"
                aria-label="Slide 1"
              ></button>
              <button
                data-bs-target="#carouselDarkVariant"
                data-bs-slide-to="2"
                aria-label="Slide 1"
              ></button>
              <button
                data-bs-target="#carouselDarkVariant"
                data-bs-slide-to="3"
                aria-label="Slide 1"
              ></button>
              <button
                data-bs-target="#carouselDarkVariant"
                data-bs-slide-to="4"
                aria-label="Slide 1"
              ></button>
            </div>

            {/* inner */}
            <div className="carousel-inner relative w-full overflow-hidden">
              {/* item 0 */}
              <div className="carousel-item active relative float-left w-full">
                <img
                  src={require("./images/morimoto.jpg")}
                  className="block w-screen scale-75 rounded-3xl"
                  alt="Morimotos"
                />
                <div className="carousel-caption hidden md:block absolute text-center bg-[#FDECA9] mx-auto w-96 rounded-3xl">
                  <h5 className="text-xl font-bold -mt-3">
                    Don't know where to eat?
                  </h5>
                  <p className="">PlateMate will help you choose!</p>
                </div>
              </div>
              {/* item 1 */}
              <div className="carousel-item relative float-left w-full">
                <img
                  src={require("./images/rebelcheese.jpg")}
                  className="block w-screen scale-75 rounded-3xl"
                  alt="Rebel Cheese"
                />
                <div className="carousel-caption hidden md:block absolute text-center bg-[#FDECA9] mx-auto w-96 rounded-3xl">
                  <h5 className="text-xl font-bold -mt-3">
                    Sign up to take the Questionnaire!
                  </h5>
                  <p>We'll help you find the right plate.</p>
                </div>
              </div>
              {/* item 2 */}
              <div className="carousel-item relative float-left w-full">
                <img
                  src={require("./images/SUGARFISH.jpg")}
                  className="block w-screen scale-75 rounded-3xl"
                  alt="Sugarfish Sushi"
                />
                <div className="carousel-caption hidden md:block absolute text-center bg-[#FDECA9] mx-auto w-96 rounded-3xl">
                  <h5 className="text-xl font-bold -mt-3">
                    Eating now? Eating later?
                  </h5>
                  <p>No problem, let us know in the questionnaire!</p>
                </div>
              </div>
              {/* item 3 */}
              <div className="carousel-item relative float-left w-full">
                <img
                  src={require("./images/gyukaku.jpg")}
                  className="box w-screen scale-75 rounded-3xl"
                  alt="Gyukaku"
                />
                <div className="carousel-caption hidden md:block absolute text-center bg-[#FDECA9] mx-auto w-96 rounded-3xl">
                  <h5 className="text-xl font-bold -mt-3">
                    Eating on a budget?
                  </h5>
                  <p>We'll find the plate for you!</p>
                </div>
              </div>
              {/* item 4 */}
              <div className="carousel-item relative float-left w-full">
                <img
                  src={require("./images/italian.jpg")}
                  className="block w-screen scale-75 rounded-3xl"
                  alt="Italian Food"
                />
                <div className="carousel-caption hidden md:block absolute text-center bg-[#FDECA9] mx-auto w-96 rounded-3xl">
                  <h5 className="text-xl font-bold -mt-3">
                    Have restrictions or allergies?
                  </h5>
                  <p>Sign up to edit your profile!</p>
                </div>
              </div>
            </div>

            {/* carousel controls */}
            <button
              className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
              type="button"
              data-bs-target="#carouselDarkVariant"
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
              data-bs-target="#carouselDarkVariant"
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
      </>
    );
  }
}
