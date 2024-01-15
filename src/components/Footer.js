import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import {
  faBell,
  faCircleUser,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <footer className="  bg-gray-100 text-black py-8">
      <div className="container flex mx-auto flex flex-col md:flex-row justify-between">
        {/* some links  */}
        <div className="mb-6 mr-6 md:mb-0">
          <h3 className="text-xl  font-bold mb-3">SiteMap</h3>
          <ul className="flex flex-col space-y-2">
            <li>
              <a href="#news" className="text-black ">
                Newsletter
              </a>
            </li>
            <li>
              <a href="#privacy" className="text-black ">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#terms" className="text-black ">
                Terma & conditions
              </a>
            </li>
            <li>
              <a href="#booking" className="text-black ">
                Reservation Policy
              </a>
            </li>
          </ul>
        </div>
        {/* location  */}
        <div className="mb-6 mr-4 md:mb-0">
          <h3 className="text-xl font-bold mb-3">
            Location
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-black text-lg ml-2"
            />
          </h3>
          <p className="text-black mb-2">789 Repository Road</p>
          <p className="text-black mb-2">Commitville, Branch State</p>
          <p className="text-black">Zip Code: 45678</p>
        </div>

        {/* socials  */}
        <div className="mb-6 flex flex-col  md:mb-0">
          <div className="text-xl  font-bold mb-2">Social Networks</div>
          <ul className="flex flex-row space-x-4">
            <li>
              <a
                href="https://www.linkedin.com/"
                className="text-black hover:text-white flex items-center"
              >
                <span className="bg-gray-800 rounded-full p-1 mr-1">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-white text-lg"
                  />
                </span>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/SherpaMilan"
                className="text-black hover:text-white flex items-center"
              >
                <span className="bg-gray-800 rounded-full p-1 mr-1">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-white text-lg"
                  />
                </span>
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/"
                className="text-black hover:text-white flex items-center"
              >
                <span className="bg-gray-800 rounded-full p-1 mr-1">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-white text-lg"
                  />
                </span>
              </a>
            </li>

            <li>
              <a
                href="https://twitter.com/"
                className="text-black hover:text-white flex items-center"
              >
                <span className="bg-gray-800 rounded-full p-1 mr-1">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-white text-lg"
                  />
                </span>
              </a>
            </li>

            <li>
              <a
                href="https://SherpaMilan.com"
                className="text-black hover:text-white flex items-center"
              >
                <span className="bg-gray-800 rounded-full p-1 mr-1">
                  <FontAwesomeIcon
                    icon={faCircleUser}
                    className="text-white text-lg"
                  />
                </span>
              </a>
            </li>
          </ul>
        </div>
        {/* opening hours */}

        <div className="mb-6 ml-10 md:mb-0">
          <h3 className="text-xl  font-bold mb-3">
            Opening Hours
            <FontAwesomeIcon
              icon={faBell}
              className="text-black text-lg ml-2"
            />
          </h3>
          <p className="text-black mb-2 shadow-sm">
            Monday to Friday: 9 AM - 5 PM
          </p>
          <p className="text-black mb-2 shadow-sm">
            Weekends: Coding marathons, please disturb responsibly
          </p>
          <p className="text-black shadow-sm">
            Holidays: Debugging in progress, expect delays
          </p>
        </div>
      </div>
      <div className="text-black-800 flex justify-center font-semibold text-l">
        <p>
          {" "}
          &copy; {new Date().getFullYear()} Little Lemon | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
