import React from "react";
import "./ProductCard.css";

import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProductCard({
  plant,
  addToCart,
  favorites,
  toggleFavorite,
}) {
  return (
    <motion.div
      className="product-card"
      whileHover={{
        y: -8,
      }}
    >
      <div className="premium-badge">
        Premium
      </div>

      <div
        className={`favorite-icon ${
          favorites.includes(plant.name)
            ? "active"
            : ""
        }`}
        onClick={() =>
          toggleFavorite(plant.name)
        }
      >
        <FaHeart />
      </div>

      <img
        src={plant.image}
        alt={plant.name}
        className="product-image"
      />

      <h2>{plant.name}</h2>

      <p className="category">
        {plant.category}
      </p>

      <div className="rating">
        ⭐ {plant.rating}
      </div>

      <div className="price-box">
        <span className="price">
          ${plant.cost}
        </span>

        <span className="stock">
          {plant.stock} left
        </span>
      </div>

      <button
        className="product-button"
        onClick={() =>
          addToCart(plant)
        }
      >
        Add To Cart
      </button>

      <Link
        to={`/product/${encodeURIComponent(
          plant.name
        )}`}
        className="details-link"
      >
        View Details →
      </Link>
    </motion.div>
  );
}

export default ProductCard;