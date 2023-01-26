export default function Logout() {
  return (
    <>
      <h1 className="justify-center text-center font-bold text-xl mt-14">
        You've been logged out.{" "}
        <img
          src={require("../images/home.png")}
          className="inline-block w-[50px]"
        ></img>
        <img
          src={require("../images/right-arrow.png")}
          className="inline-block w-[30px] ml-2"
        ></img>
      </h1>
      <h1 className="text-center font-bold text-xl">
        Thank you for using PlateMate!
      </h1>
      <div className="flex justify-center items-center">
        <img
          src={require("../images/pizza-dance.gif")}
          alt="Loading..."
          className="w-[400px] mb-20"
        />
      </div>
    </>
  );
}
