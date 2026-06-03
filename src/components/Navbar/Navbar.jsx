import React, {
  useContext,
  useEffect,
  useState,
} from "react";

import "./Navbar.css";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import {
  FaHeart,
  FaShoppingCart,
  FaMoon,
  FaSun,
} from "react-icons/fa";

import { ThemeContext } from "../../context/ThemeContext";

function Navbar() {
  const { darkMode, toggleTheme } =
    useContext(ThemeContext);

  const cartItems = useSelector(
    (state) => state.cart.items || []
  );

  const [favoritesCount, setFavoritesCount] =
    useState(0);

  useEffect(() => {
    const updateFavorites = () => {
      const favs =
        JSON.parse(
          localStorage.getItem("favorites")
        ) || [];

      setFavoritesCount(favs.length);
    };

    updateFavorites();

    window.addEventListener(
      "favoritesUpdated",
      updateFavorites
    );

    return () =>
      window.removeEventListener(
        "favoritesUpdated",
        updateFavorites
      );
  }, []);

  const totalItems = cartItems.reduce(
    (acc, item) =>
      acc + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <Link
        to="/"
        className="logo"
      >
        🌿 Plant Paradise
      </Link>

      <div className="nav-links">
        <Link to="/">
          Home
        </Link>

        <Link to="/favorites">
          <FaHeart />
          <span className="counter">
            {favoritesCount}
          </span>
        </Link>

        <Link to="/cart">
          <FaShoppingCart />
          <span className="counter">
            {totalItems}
          </span>
        </Link>

        <button
          className="theme-btn"
          onClick={toggleTheme}
        >
          {darkMode ? (
            <FaSun />
          ) : (
            <FaMoon />
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;