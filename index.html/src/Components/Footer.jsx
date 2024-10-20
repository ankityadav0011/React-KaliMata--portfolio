import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import image from '../assets/leetcodeimg.png'
import codef from '../assets/codef.png'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Yousaf</h3>
            <p className="text-gray-400">
              Software  Developer based in the India , specializing in
              Frontend development.
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 
                focus:outline-none focus:border-green-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 
                py-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div> */}

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Ankit. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="https://leetcode.com/u/kittu_7208701/" className="text-gray-400 hover:text-white">
              <img className="h-7 w-7" src={image} alt="" />
            </a>
            <a href="https://codeforces.com/profile/kittu_007" className="text-gray-400 hover:text-white">
            <img className="h-7 w-7" src={codef} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/ankit-kumar-3656a4250" className="text-gray-400 hover:text-white">
              <FaLinkedin className="h-7 w-7" />
            </a>
            <a href="https://github.com/ankityadav0011" className="text-gray-400 hover:text-white">
              <FaGithub className="h-7 w-7" />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;