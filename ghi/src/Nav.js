import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useToken, useAuthContext } from "./Authentication/AuthenticateUser";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faList,
  faRightFromBracket,
  faCircleInfo,
  faTools,
} from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  const [, , logout] = useToken();
  const { token } = useAuthContext();
  const [user, setUser] = useState({});

  let [nav, setNav] = useState(false);

  function handleNav() {
    setNav(!nav);
  }

  const fetchAccount = async () => {
    const url = `${process.env.REACT_APP_PLATEMATE_API_HOST}/api/accounts/me`;
    const result = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await result.json();
    setUser(data);
  };

  useEffect(() => {
    if (token) {
      fetchAccount();
    }
  }, [token]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  if (!token) {
    return (
      <nav
        id="nav"
        className="top-0 left-0 flex justify-center items-center bg-[#FDECA9] py-3"
      >
        <div className="mx-auto">
          <a href="/">
            <div className="flex justify-between tracking-[8px] ml-44 text-4xl font-md items-center">
              <h1 className="-mr-1">Plate</h1>
              <img
                src={require("./images/plate.png")}
                className="h-10 mx-2 ml-1"
                alt="PlateMate Logo"
              />
              <h1>Mate</h1>
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
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-24 group-hover:h-16 opacity-10"></span>
            SIGNUP
          </button>
        </div>
        <div className="hidden md:flex items-center">
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
          <button
            onClick={handleNav}
            className="inline-flex items-center p-2 ml-3 text-sm md:hidden "
          >
            <img src={require("../src/images/hamburger.png")} width="30px" />
          </button>
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
  } else {
    return (
      <nav className="flex justify-between items-center bg-[#FDECA9] py-3">
        <Menu as="div" className="relative inline-block text-left ml-5">
          <div>
            <Menu.Button className="inline-flex w-full items-center justify-center px-4 py-2 font-medium text-gray-700 ">
              <img
                src={require("./images/burger.png")}
                width="20"
                className="mr-2 mb-1"
              />
              <h1 className="dropdown font-md text-xl">
                Hello, {user.first_name}!
              </h1>
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-500 rounded-md bg-[#f6f2ed] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="platemate/me"
                      className={classNames(
                        active
                          ? "bg-[#dad6d0] text-[#BB5855]"
                          : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      <FontAwesomeIcon icon={faUser} className="mr-2" />
                      My Profile
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="platemate/restaurants"
                      className={classNames(
                        active
                          ? "bg-[#dad6d0] text-[#BB5855]"
                          : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      <FontAwesomeIcon icon={faList} className="mr-2" />
                      My List of Restaurants
                    </a>
                  )}
                </Menu.Item>
              </div>
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/about"
                      className={classNames(
                        active
                          ? "bg-[#dad6d0] text-[#BB5855]"
                          : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      <FontAwesomeIcon icon={faCircleInfo} className="mr-2" />
                      About
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="platemate/resources"
                      className={classNames(
                        active
                          ? "bg-[#dad6d0] text-[#BB5855]"
                          : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      <FontAwesomeIcon icon={faTools} className="mr-2" />
                      Resources
                    </a>
                  )}
                </Menu.Item>
              </div>
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="platemate/logout"
                      onClick={logout}
                      className={classNames(
                        active
                          ? "bg-[#dad6d0] text-[#BB5855]"
                          : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      <FontAwesomeIcon
                        icon={faRightFromBracket}
                        className="mr-2"
                      />
                      Logout
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <div className="mx-auto">
          <a href="/">
            <div className="flex justify-between tracking-[7px] text-3xl items-center mr-10">
              <h1>Plate</h1>
              <img
                src={require("./images/plate.png")}
                className="h-10 mx-2 ml-0 mr-2"
                alt="PlateMate Logo"
              />
              <h1>Mate</h1>
            </div>
          </a>
        </div>
        <a href="/">
          <button
            type="button"
            className="bg-[#BB5855] mx-[40px] rounded text-[#FDECA9] text-sm py-1 px-4 relative inline-flex group items-center justify-center cursor-pointer"
          >
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-28 group-hover:h-16 opacity-10"></span>
            HOME
            <img
              src={require("./images/home.png")}
              width="20"
              className="ml-1.5"
            />
          </button>
        </a>
      </nav>
    );
  }
}
