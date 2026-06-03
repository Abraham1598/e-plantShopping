import React from "react";
import ProductList from "../components/ProductList/ProductList";

import fondo2 from "../assets/plants/fondo2.jpg";

function Home() {
  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage: `url(${fondo2})`,
        }}
      >
        <div className="hero-content">
          <h1>Premium Plant Collection</h1>

          <p>
            Discover indoor, outdoor and medicinal
            plants for every space.
          </p>

          <div className="hero-buttons">
            <button className="shop-btn">
              Shop Now
            </button>

            <button className="explore-btn">
              Explore Plants
            </button>
          </div>
        </div>
      </section>

      <ProductList />
    </>
  );
}

export default Home;