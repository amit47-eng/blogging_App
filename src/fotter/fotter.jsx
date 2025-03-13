import React from "react";
import { IoMdAdd } from "react-icons/io";
import { FaSignalMessenger } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";

function Fotter() {
  return (
    <footer>
      <a href="">
        <TiHome />
      </a>
      <a href="">
        <IoMdAdd />
      </a>
      <a href="">
        <FaSignalMessenger />
      </a>
    </footer>
  );
}

export default Fotter;
