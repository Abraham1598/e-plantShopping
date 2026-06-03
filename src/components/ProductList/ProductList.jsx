import React, { useEffect, useState } from "react";
import "./ProductList.css";

import plants from "../../data/plants";

import { useDispatch } from "react-redux";
import { addItem } from "../../redux/CartSlice";

import ProductCard from "../ProductCard/ProductCard";

import { toast } from "react-toastify";

function ProductList() {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const [favorites, setFavorites] = useState(
    JSON.parse(
      localStorage.getItem("favorites")
    ) || []
  );

  useEffect(() => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  const categories = [
    "All",
    "Air Purifying",
    "Medicinal",
    "Aromatic",
    "Indoor",
    "Succulent",
    "Flowering",
    "Outdoor",
    "Insect Repellent",
  ];

  const filteredPlants = plants.filter(
    (plant) => {
      const matchSearch =
        plant.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchCategory =
        category === "All" ||
        plant.category === category;

      return (
        matchSearch &&
        matchCategory
      );
    }
  );

  const toggleFavorite = (name) => {
    let updatedFavorites;

    if (
      favorites.includes(name)
    ) {
      updatedFavorites =
        favorites.filter(
          (item) => item !== name
        );
    } else {
      updatedFavorites = [
        ...favorites,
        name,
      ];
    }

    setFavorites(updatedFavorites);

    window.dispatchEvent(
      new Event("favoritesUpdated")
    );
  };

  const addToCart = (plant) => {
    dispatch(addItem(plant));

    toast.success(
      `${plant.name} added to cart`
    );
  };

  return (
    <div className="products-page">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search premium plants..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          className="search-input"
        />
      </div>

      <div className="results-count">
        {filteredPlants.length} Plants Available
      </div>

      <div className="filter-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() =>
              setCategory(cat)
            }
            className={
              category === cat
                ? "active-filter"
                : ""
            }
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredPlants.map(
          (plant) => (
            <ProductCard
              key={plant.id}
              plant={plant}
              addToCart={addToCart}
              favorites={favorites}
              toggleFavorite={
                toggleFavorite
              }
            />
          )
        )}
      </div>
    </div>
  );
}

export default ProductList;