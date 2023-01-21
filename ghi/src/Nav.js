import { useState } from "react";
import { useToken, useAuthContext } from "./Authentication/AuthenticateUser"

function Nav() {
  const [ ,,logout] = useToken()
  const {token} = useAuthContext()
  let [nav, setNav] = useState(false);
  // nav = false
  function handleNav() {
    setNav(!nav);
  }

if (!token){
  return (
    <nav className="flex justify-between items-center bg-[#FDECA9] py-3">
      <div className="mx-auto mr-25">
        <a href="/">
          <div className="flex space-x-1 tracking-[4px] text-xl font-semibold items-center">
            <span>PLATE</span>
            <img
              src={require("./images/plate.png")}
              className="h-9"
              alt="PlateMate Logo"
            />
            <span>MATE</span>
          </div>
        </a>
      </div>
      <div className="hidden md:flex items-center">
        <button
          type="button"
          className="bg-[#BB5855] mx-0 rounded text-[#FDECA9] text-sm py-1 px-4 relative inline-flex group items-center justify-center cursor-pointer"
          data-bs-toggle="modal"
          data-bs-target="#signup"
        >
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
          SIGNUP
        </button>
        <button
          type="button"
          className="text-[#BB5855] mx-6 rounded text-sm outline outline-offset-4 outline-2 py-0 px-4 relative font-semibold text-center no-underline transition-all duration-300 ease-in-out cursor-pointer hover:text-[#bb58557c] "
          data-bs-toggle="modal"
          data-bs-target="#login"
        >
          LOGIN
        </button>
      </div>
      <div className="block md:hidden">
        {/* Mobile Hamburger Icon */}
        <button
          onClick={handleNav}
          className="inline-flex items-center p-2 ml-3 text-sm md:hidden "
        >
          <img src={require("../src/images/hamburger.png")} width="30px" />
        </button>

        {/* Dropdown menu */}
        <div
          className={
            nav
              ? "block absolute right-0 z-10 mt-0 w-56 mr-2 origin-top-right rounded-md bg-[#BB5855] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              : "hidden"
          }
        >
          <ul className="py-1 text-sm text-gray-100 divide-y ">
            <div>
              <a
                data-bs-toggle="modal"
                data-bs-target="#signup"
                className="block px-4 py-2 transition-all duration-300 ease-in-out cursor-pointer hover:text-black"
              >
                SIGNUP
              </a>
            </div>
            <div>
              <a
                data-bs-toggle="modal"
                data-bs-target="#login"
                className="block px-4 py-2 transition-all duration-300 ease-in-out cursor-pointer hover:text-black"
              >
                LOGIN
              </a>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
else {
  return (
    <nav className="flex justify-between items-center bg-[#FDECA9] py-3">
      <div className="mx-auto mr-25">
        <a href="/">
          <div className="flex space-x-1 tracking-[4px] text-xl font-semibold items-center">
            <span>PLATE</span>
            <img
              src={require("./images/plate.png")}
              className="h-9"
              alt="PlateMate Logo"
            />
            <span>MATE</span>
          </div>
        </a>
      </div>
        <a href="/logout">
        <button
          type="button"
          onClick= {logout}
          className="text-[#BB5855] mx-6 rounded text-sm outline outline-offset-4 outline-2 py-0 px-4 relative font-semibold text-center no-underline transition-all duration-300 ease-in-out cursor-pointer hover:text-[#bb58557c] "
        >
          LOGOUT
        </button>
  </a>
  </nav>
  )
}
}
export default Nav;
