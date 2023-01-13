import React from "react";
import plateLogo from "../images/plate.png";
import Marison from "../images/marison_icon.png";
import Gina from "../images/gina_icon.png";
import Natalie from "../images/nat_icon.png";
import Jason from "../images/jason_icon.png";
import Zac from "../images/zac_icon.png";

const Footer = () => {
  return (
    <footer className="p-4 bg-white h-screen p-12 bg-[#fef5ed]">
      <div className="">
        <div className="mb-6 md:mb-0 items-center">
          <ul className="grid grid-cols-3 text-gray-600 dark:text-black">
            <li className="items-center mb-4">
              <a href="/" className="hover:underline font-semibold">
                About
              </a>
            </li>
            <li>
              <a href="/" className="flex items-center">
                <span className="flex space-x-1 tracking-[4px] text-xl font-semibold items-center">
                  PLATE
                </span>
                <img src={plateLogo} className="h-9" alt="PlateMate Logo" />
                <span className="flex space-x-1 tracking-[4px] text-xl font-semibold items-center">
                  MATE
                </span>
              </a>
            </li>
            <li className="mb-4">
              <a href="/" className="hover:underline font-semibold">
                Rescoures
              </a>
            </li>
          </ul>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        </div>

        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3"></div>
      </div>

      <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
        <div className="border-2 border-black rounded-full my-2 p-2">
          <a href="https://www.linkedin.com/in/marisonmunoz/">
            <img
              src={Marison}
              className="h-10"
              alt="Marison"
              title="Marison Munoz"
            ></img>
            <span className="sr-only">Marison Munoz</span>
          </a>
        </div>
        <div className="border-2 border-black rounded-full my-2 p-2">
          <a
            href="https://www.linkedin.com/in/gina-john/"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <img src={Gina} className="h-10" alt="Gina" title="Gina John"></img>
            <span className="sr-only">Gina John</span>
          </a>
        </div>
        <div className="border-2 border-black rounded-full my-2 p-2">
          <a href="https://www.linkedin.com/in/natalientang/">
            <img
              src={Natalie}
              className="h-10"
              alt="Natalie"
              title="Natalie Tang"
            ></img>
            <span className="sr-only">Natalie Tang</span>
          </a>
        </div>
        <div className="border-2 border-black rounded-full my-2 p-2">
          <a
            href="https://www.linkedin.com/in/jason-olefson/"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <img
              src={Jason}
              className="h-10"
              alt="Jason"
              title="Jason Olefson"
            ></img>
            <span className="sr-only">Jason Olefson</span>
          </a>
        </div>
        <div className="border-2 border-black rounded-full my-2 p-2">
          <a
            href="https://www.linkedin.com/in/zachary-macek/"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <img
              src={Zac}
              className="h-10"
              alt="Zachary"
              title="Zachary Macek"
            ></img>
            <span className="sr-only">Zachary Macek</span>
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center pt-6 pb-3">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a
            href="https://gitlab.com/team-4-hack-n-snack/platemate"
            className="hover:underline text-center"
            title="PlateMate GitLab Repository"
          >
            PlateMate™
          </a>
          . Hack 'N' Snack. Hack Reactor - SJP Sept CT 2022.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
