import React, {useEffect, useState} from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {HiMenuAlt1} from "react-icons/hi";
import {useCart} from "../context/CartContext";
import Spinner from "../Spinner";

const styles = {
  linkPages:
    "sm:text-sm text-white p-[8px] hover:bg-[#eab308] hover:text-black hover:font-semibold hover:rounded-[4px]",
};

const activeStyle = {
  color: "white",
  backgroundColor: "#eab308",
  padding: "8px",
  borderRadius: "4px",
  color: "black",
  fontWeight: "bold",
};

const Navbar = ({setNavBarModal, navbarModal}) => {
  const user = JSON.parse(localStorage.getItem("userEcommerce"));
  const {cartProducts, loading, error} = useCart();

  const navigait = useNavigate();
  return (
    <nav className="bg-[#03271b] flex justify-between items-center p-8 w-[100%]">
      <Link to="/">
        <h2 className="text-white font-semibold text-3xl">Furni.</h2>
      </Link>
      <ul className="invisible absolute md:flex md:items-center gap-2 md:gap-4 md:visible md:static">
        <NavLink
          style={({isActive}) => (isActive ? activeStyle : undefined)}
          to="/"
          end
          className={styles.linkPages}
        >
          Home
        </NavLink>
        <NavLink
          style={({isActive}) => (isActive ? activeStyle : undefined)}
          to="/allProducts"
          className={styles.linkPages}
        >
          Shop
        </NavLink>
        <NavLink
          style={({isActive}) => (isActive ? activeStyle : undefined)}
          to="/about"
          className={styles.linkPages}
        >
          About Us
        </NavLink>

        <NavLink
          style={({isActive}) => (isActive ? activeStyle : undefined)}
          to="/blogs"
          className={styles.linkPages}
        >
          Blogs
        </NavLink>
        <NavLink
          style={({isActive}) => (isActive ? activeStyle : undefined)}
          to="/contact"
          className={styles.linkPages}
        >
          Contact Us
        </NavLink>

        <NavLink
          to="/Cart"
          className={
            "relative text-white hover:text-white  border-b-4 border-yellow-500 link-nav bg-black p-2 rounded-full font-bold"
          }
        >
          <span className="absolute top-0 right-[-6px] bg-red-700 rounded-full text-[8px] px-2">
            {cartProducts.length}
          </span>
          <svg
            width="1.2em"
            height="1.2em"
            viewBox="0 0 16 16"
            className="bi bi-cart"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
            />
          </svg>
        </NavLink>
      </ul>
      <div className="flex gap-2 lg:gap-4">
        {user ? (
          <button
            className="bg-white py-1 px-2 rounded  font-semibold"
            onClick={() => {
              navigait("/");
              localStorage.removeItem("userEcommerce");
            }}
          >
            Logout
          </button>
        ) : (
          <button
            className="bg-white py-1 px-2 rounded  font-semibold"
            onClick={() => navigait("/auth")}
          >
            Signin
          </button>
        )}
        <HiMenuAlt1
          color="white"
          size={30}
          onClick={() => setNavBarModal(!navbarModal)}
          className="cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;
