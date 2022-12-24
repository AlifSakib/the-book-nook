import Link from "next/link";
import React from "react";
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">The Book Nook</Link>
      </p>
      <button type="button" className="cart-icon" onClick="">
        <FaCartPlus></FaCartPlus>
        <span className="cart-item-qty">0</span>
      </button>
    </div>
  );
};

export default Navbar;
