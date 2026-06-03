import React, { useState, useEffect } from "react";

import plants from "../../data/plants";

import ProductCard from "../../components/ProductCard/ProductCard";

import { useDispatch } from "react-redux";

import { addItem } from "../../redux/CartSlice";

import { toast } from "react-toastify";

function Favorites() {
  const dispatch = useDispatch();

  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  useEffect(() => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  const favoritePlants = plants.filter((plant) =>
    favorites.includes(plant.name)
  );

  const addToCart = (plant) => {
    dispatch(addItem(plant));

    toast.success(
      `${plant.name} added to cart`
    );
  };

  const toggleFavorite = (name) => {
    const updatedFavorites =
      favorites.filter(
        (item) => item !== name
      );

    setFavorites(updatedFavorites);

    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    );

    toast.info(
      `${name} removed from favorites`
    );
  };

  return (
    <div
      className="products-page"
      style={{
        minHeight: "80vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        ❤️ Favorites ({favorites.length})
      </h1>

      {favoritePlants.length === 0 ? (
        <h2
          style={{
            textAlign: "center",
            opacity: 0.7,
          }}
        >
          No favorites yet.
        </h2>
      ) : (
        <div className="product-grid">
          {favoritePlants.map((plant) => (
            <ProductCard
              key={plant.id}
              plant={plant}
              addToCart={addToCart}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;