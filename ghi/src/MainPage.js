import { useToken, useAuthContext } from "./Authentication/AuthenticateUser";

export default function MainPage() {
  const { token } = useAuthContext();

  if (!token) {
    return (
      <>
        <h1 className="welcome font-bold text-5xl font-montserrat animated text-center mt-14 mb-5 tracking-[7px]">
          Welcome to PlateMate
        </h1>
        <h2 className="font-md text-2xl font-sans text-center dropdown">
          Sign up to be a mate, so we can help you find your plate!
        </h2>
        <div className="bg-[#C6D3BE] mx-auto rounded-3xl max-w-5xl">
          <div className="flex justify-center mx-auto px-auto mt-10"></div>
          <div className="flex justify-center mx-auto px-auto mt-2"></div>

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
                <div className="carousel-caption hidden md:block absolute text-center bg-[#FDECA9] mx-auto w-96 rounded-3xl drop-shadow-md">
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
                <div className="carousel-caption hidden md:block absolute text-center bg-[#FDECA9] mx-auto w-96 rounded-3xl drop-shadow-md">
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
                <div className="carousel-caption hidden md:block absolute text-center bg-[#FDECA9] mx-auto w-96 rounded-3xl drop-shadow-md">
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
                <div className="carousel-caption hidden md:block absolute text-center bg-[#FDECA9] mx-auto w-96 rounded-3xl drop-shadow-md">
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
                <div className="carousel-caption hidden md:block absolute text-center bg-[#FDECA9] mx-auto w-96 rounded-3xl drop-shadow-md">
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
                src={require("./images/form.png")}
                alt="Loading..."
                className="inline-block w-9 ml-2"
              />
            </span>
          </button>
        </div>
        <div className="bg-[#C6D3BE] mx-auto rounded-3xl max-w-5xl max-h-lg">
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
  }
}
