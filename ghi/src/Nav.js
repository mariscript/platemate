import { NavLink, Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="flex justify-between bg-[#FDECA9] py-3">
      <div className="mx-auto">
        <a href="<insert HOME PAGE>">
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
      <div className="flex items-center">
        <button className="bg-[#BB5855] mx-0 rounded hover:bg-[#793938] text-[#FDECA9] text-sm py-1 px-4">
          SIGNUP
        </button>
        <button className="text-[#BB5855] mx-6 rounded  text-sm outline outline-offset-2 outline-3 outline-[#BB5855] py-0 px-4">
          LOGIN
        </button>
      </div>
    </nav>
  );
}

export default Nav;
