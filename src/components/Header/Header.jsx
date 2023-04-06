import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
const Header = () => {
  return (
    <nav className="Header bg-[#1C2B35] flex justify-between py-2 px-[10%] items-center">
      <img src={logo} alt="" />
      <div className="text-white grid grid-flow-col gap-5">
        <a href="/Order">Order</a>
        <a href="/Review">Order Review</a>
        <a href="/Inventory">Manage Inventory</a>
        <a href="/Login">Login</a>
      </div>
    </nav>
  );
};

export default Header;
