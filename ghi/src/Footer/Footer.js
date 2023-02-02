import React from "react";
import plateLogo from "../images/plate.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-1/2 mx-auto h-8 transparent 0 bottom-0 items-center inset-x-0 bg-[#fef5ed] mt-10">
      <div className="flex justify-center text-gray-600">
        <div className="mb-2 col-end-7 col-span-2">
          <Link to="/about" className="hover:underline font-semibold text-s">
            About
          </Link>
        </div>
        <div className="justify-center mx-16">
          <Link to="/" className="flex items-center">
            <h1 className="flex space-x-1 tracking-[7px] text-3xl font-md items-center">
              Plate
            </h1>
            <img
              src={plateLogo}
              className="h-9 mr-2 mx-2 -ml-0 "
              alt="PlateMate Logo"
            />
            <h1 className="flex space-x-1 tracking-[7px] text-3xl font-md items-center">
              Mate
            </h1>
          </Link>
        </div>
        <div className="mb-2 col-end-7 col-span-2">
          <Link
            to="/resources"
            className="hover:underline font-semibold text-s"
          >
            Resources
          </Link>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

      <div className="justify-items-center">
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-2 min-w-fit justify-items-center">
          <div className="-mr-48 border-2 box-content border-black max-w-fit min-w-fit rounded-full my-2 p-2 place-self-center">
            <a target="_blank" href="https://www.linkedin.com/in/marisonmunoz/">
              <img
                src={require("../images/marison_icon.png")}
                className="h-10"
                alt="Marison"
                title="Marison Munoz"
              ></img>
              <span className="sr-only">Marison Munoz</span>
            </a>
          </div>
          <div className="-mr-24 border-2 box-content border-black max-w-fit min-w-fit rounded-full my-2 p-2">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/gina-john/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <img
                src={require("../images/gina_icon.png")}
                className="h-10"
                alt="Gina"
                title="Gina John"
              ></img>
              <span className="sr-only">Gina John</span>
            </a>
          </div>
          <div className="border-2 box-content border-black max-w-fit min-w-fit rounded-full my-2 p-2">
            <a target="_blank" href="https://www.linkedin.com/in/natalientang/">
              <img
                src={require("../images/nat_icon.png")}
                className="h-10"
                alt="Natalie"
                title="Natalie Tang"
              ></img>
              <span className="sr-only">Natalie Tang</span>
            </a>
          </div>
          <div className="-ml-24 border-2 box-content border-black max-w-fit min-w-fit rounded-full my-2 p-2">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/jason-olefson/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <img
                src={require("../images/jason_icon.png")}
                className="h-10"
                alt="Jason"
                title="Jason Olefson"
              ></img>
              <span className="sr-only">Jason Olefson</span>
            </a>
          </div>
          <div className="-ml-48 border-2 box-content border-black max-w-fit min-w-fit rounded-full my-2 p-2">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/zachary-macek/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <img
                src={require("../images/zac_icon.png")}
                className="h-10"
                alt="Zachary"
                title="Zachary Macek"
              ></img>
              <span className="sr-only">Zachary Macek</span>
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center pt-6 pb-3">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 mb-0">
          © 2023{" "}
          <a
            target="_blank"
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
