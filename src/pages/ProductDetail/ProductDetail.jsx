import React from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/CartSlice";
import { toast } from "react-toastify";

import plants from "../../data/plants";
import "./ProductDetail.css";

function ProductDetail() {
  const { name } = useParams();

  const dispatch = useDispatch();

  const plant = plants.find(
    (p) => p.name === decodeURIComponent(name)
  );

  if (!plant) {
    return (
      <h1 className="not-found">
        Product Not Found
      </h1>
    );
  }

  const relatedPlants = plants
    .filter(
      (p) =>
        p.category === plant.category &&
        p.id !== plant.id
    )
    .slice(0, 4);

  const handleAddToCart = () => {
    dispatch(addItem(plant));

    toast.success(
      `${plant.name} added to cart`
    );
  };

  return (
    <>
      <div className="detail-page">
        <div className="image-wrapper">
          <img
            src={plant.image}
            alt={plant.name}
            className="detail-image"
          />
        </div>

        <div className="detail-info">
          <span className="category-badge">
            {plant.category}
          </span>

          <h1>{plant.name}</h1>

          <div className="rating-pill">
            ⭐ {plant.rating}/5
          </div>

          <h2 className="price">
            ${plant.cost}
          </h2>

          <div className="badges">
            <span>🌱 Organic</span>
            <span>🚚 Free Shipping</span>
            <span>⭐ Bestseller</span>
          </div>

          <div className="stock-pill">
            📦 {plant.stock} units available
          </div>

          <div className="info-grid">
            <div>
              🚚
              <strong>Delivery</strong>
              <span>2-4 Days</span>
            </div>

            <div>
              🌿
              <strong>Care</strong>
              <span>Easy</span>
            </div>

            <div>
              ☀
              <strong>Light</strong>
              <span>Medium</span>
            </div>

            <div>
              💧
              <strong>Water</strong>
              <span>Weekly</span>
            </div>
          </div>

          <p className="description">
            {plant.description}
          </p>

          <button
            className="add-cart-btn"
            onClick={handleAddToCart}
          >
            🛒 Add To Cart
          </button>

          <div className="love-box">
            <h3>
              Why you'll love it
            </h3>

            <ul>
              <li>
                Premium quality plant
              </li>
              <li>
                Healthy root system
              </li>
              <li>
                Easy maintenance
              </li>
              <li>Fast shipping</li>
              <li>
                Ideal gift option
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section className="related-section">
        <h2>Related Products</h2>

        <div className="related-grid">
          {relatedPlants.map((item) => (
            <Link
              key={item.id}
              to={`/product/${encodeURIComponent(
                item.name
              )}`}
              className="related-link"
            >
              <div className="related-card">
                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="related-content">
                  <h3>{item.name}</h3>

                  <p className="related-category">
                    {item.category}
                  </p>

                  <p className="related-price">
                    ${item.cost}
                  </p>

                  <p className="related-rating">
                    ⭐ {item.rating}
                  </p>

                  <p className="related-stock">
                    Stock: {item.stock}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default ProductDetail;