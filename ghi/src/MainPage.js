function MainPage() {
  return (
    <div className="justify-center">
      <div
        id="carouselDarkVariant"
        className="carousel slide carousel-fade carousel-dark relative"
        data-bs-ride="carousel"
      >
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

        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full">
            <img
              src={require("./images/morimoto.jpg")}
              className="block scale-75 rounded-lg"
              alt="Morimotos"
            />
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-xl">Don't know where to eat?</h5>
              <p className="">PlateMate will help you choose!</p>
            </div>
          </div>

          <div className="carousel-item relative float-left w-full">
            <div class="d-flex justify-content-center">
              <img
                src={require("./images/rebelcheese.jpg")}
                className="block scale-75 rounded-lg"
                alt="Rebel Cheese"
              />
            </div>
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-xl">Take the Questionnaire!</h5>
              <p>We'll help you find the right plate.</p>
            </div>
          </div>

          <div className="carousel-item relative float-left w-full">
            <img
              src={require("./images/SUGARFISH.jpg")}
              className="block scale-75 rounded-lg"
              alt="Sugarfish Sushi"
            />
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-xl">Eating now? Eating later?</h5>
              <p>No problem, let us know in the questionnaire!</p>
            </div>
          </div>
        </div>

        <div className="carousel-item relative float-left w-full">
          <img
            src={require("./images/gyukaku.jpg")}
            className="block scale-75 rounded-lg"
            alt="Gyukaku"
          />
          <div className="carousel-caption hidden md:block absolute text-center">
            <h5 className="text-xl">Fourth slide label</h5>
            <p>Some representative placeholder content for the fourth slide.</p>
          </div>
        </div>

        <div className="carousel-item relative float-left w-full">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp"
            className="block w-full"
            alt="Woman Reading a Book"
          />
          <div className="carousel-caption hidden md:block absolute text-center">
            <h5 className="text-xl">Fifth slide label</h5>
            <p>Some representative placeholder content for the fifth slide.</p>
          </div>
        </div>

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
  );
}

export default MainPage;
