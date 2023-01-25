function MainPage() {
  return (
    <>
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
              className="block w-screen scale-75"
              alt="Morimotos"
            />
            <div className="carousel-caption hidden md:block absolute text-center bg-[#FDECA9]">
              <h5 className="text-xl font-bold">Don't know where to eat?</h5>
              <p className="">PlateMate will help you choose!</p>
            </div>
          </div>
          {/* item 1 */}
          <div className="carousel-item relative float-left w-full">
            <img
              src={require("./images/rebelcheese.jpg")}
              className="block w-screen scale-75"
              alt="Rebel Cheese"
            />
            <div className="carousel-caption hidden md:block absolute text-center bg-[#FDECA9]">
              <h5 className="text-xl font-bold">Take the Questionnaire!</h5>
              <p>We'll help you find the right plate.</p>
            </div>
          </div>
          {/* item 2 */}
          <div className="carousel-item relative float-left w-full">
            <img
              src={require("./images/SUGARFISH.jpg")}
              className="block w-screen scale-75"
              alt="Sugarfish Sushi"
            />
            <div className="carousel-caption hidden md:block absolute text-center bg-[#FDECA9]">
              <h5 className="text-xl font-bold">Eating now? Eating later?</h5>
              <p>No problem, let us know in the questionnaire!</p>
            </div>
          </div>
          {/* item 3 */}
          <div className="carousel-item relative float-left w-full">
            <img
              src={require("./images/gyukaku.jpg")}
              className="box w-screen scale-75"
              alt="Gyukaku"
            />
            <div className="carousel-caption hidden md:block absolute text-center bg-[#FDECA9]">
              <h5 className="text-xl font-bold">Eating on a budget?</h5>
              <p>We'll find the plate for you!</p>
            </div>
          </div>
          {/* item 4 */}
          <div className="carousel-item relative float-left w-full">
            <img
              src={require("./images/italian.jpg")}
              className="block w-screen scale-75"
              alt="Italian Food"
            />
            <div className="carousel-caption hidden md:block absolute text-center bg-[#FDECA9]">
              <h5 className="text-xl">Have restrictions or allergies?</h5>
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
    </>
  );
}

export default MainPage;
