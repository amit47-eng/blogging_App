import React from "react";
import { IoMdAdd } from "react-icons/io";
import { FaSignal } from "react-icons/fa";
import { TiHome } from "react-icons/ti";

function Fotter() {
  return (
    <footer className="bg-gray-800 p-4 flex justify-around shadow-md fixed bottom-0 w-full">
      <a href="#" className="text-white p-2 rounded-full bg-gray-700 hover:bg-gray-600">
        <TiHome />
      </a>
      <a href="#" className="text-white p-2 rounded-full bg-gray-700 hover:bg-gray-600">
        <IoMdAdd />
      </a>
      <a href="#" className="text-white p-2 rounded-full bg-gray-700 hover:bg-gray-600">
        <FaSignal />
      </a>
      <div className="text-white">
        <p>&copy; 2023 Blogging App</p>
        <nav className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300">Terms of Service</a>
          <a href="#" className="hover:text-gray-300">Contact Us</a>
          <a href="#" className="hover:text-gray-300">FAQ</a>
        </nav>
      </div>
    </footer>
  );
}

export default Fotter;
