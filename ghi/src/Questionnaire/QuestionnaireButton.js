function QuestionnaireButton() {
  return (
    <div className="flex justify-center mt-10 mb-5">
      <button
        type="button"
        className="inline-block px-10 py-6 bg-[#C26866] text-white font-medium text-xl leading-tight uppercase rounded-full shadow-md hover:bg-[#FDECA9] hover:shadow-lg hover:text-black focus:bg-[#C26866] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#C26866] active:shadow-lg transition duration-150 ease-in-out"
        data-bs-toggle="modal"
        data-bs-target="#questionnaire"
      >
        <span className="inline-block font-bold">Take The Questionnaire!</span>
        <img
          src={require("../images/form.png")}
          alt="Loading..."
          className="inline-block w-9 ml-2"
        />
      </button>
    </div>
  );
}

export default QuestionnaireButton;
