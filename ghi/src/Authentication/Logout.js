export default function Logout() {
  return (
    <>
      <h1 className="text-center font-bold text-xl mt-14">
        You've been logged out.
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
