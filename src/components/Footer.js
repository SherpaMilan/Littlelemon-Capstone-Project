import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-3">Connect Us</h3>
          <ul className="flex flex-col">
            <li>
              <a
                href="#home"
                className=" text-black-800
                font-semibold
                text-l
                hover:bg-gray-700
                hover:text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className=" text-black-800
                font-semibold
                text-l
                hover:bg-gray-700
                hover:text-white"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className=" text-black-800
                font-semibold
                text-l
                hover:bg-gray-700
                hover:text-white"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#about"
                className=" text-black-800
                font-semibold
                text-l
                hover:bg-gray-700
                hover:text-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className=" text-black-800
                font-semibold
                text-l
                hover:bg-gray-700
                hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-6 md:mb-0">
          <h3
            className=" text-black-800
                font-semibold
                text-l
                hover:bg-gray-700
                hover:text-white"
          >
            EXTERNAL LINKS
          </h3>
          <ul className="flex flex-col">
            <li>
              <a
                href="https://www.linkedin.com/"
                className="text-black hover:text-white flex items-center"
              >
                <span className="bg-blue-500 rounded-full p-1 mr-2">
                  <i className="fab fa-linkedin text-white text-xl transform scale-150"></i>
                </span>
                LinkedIn
              </a>
            </li>

            <li>
              <a
                href="https://github.com/SherpaMilan"
                className=" text-green-800
                font-semibold
                text-l
                hover:bg-gray-700
                hover:text-white"
              >
                zaa <i class="fa-brands fa-github"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h1
            className=" text-black-800
                font-semibold
                text-l
                hover:bg-gray-700
                hover:text-white"
          >
            Milan | Web Developer
          </h1>
          <p
            className=" text-black-800
                font-semibold
                text-l
                hover:bg-gray-700
                hover:text-white"
          >
            &copy; All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
