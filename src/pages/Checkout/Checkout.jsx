import React from "react";

import {
  useSelector,
  useDispatch,
} from "react-redux";

import { clearCart } from "../../redux/CartSlice";

import {
  useNavigate,
} from "react-router-dom";

function Checkout() {
  const cart = useSelector(
    (state) => state.cart.items
  );

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const subtotal = cart.reduce(
    (acc, item) =>
      acc +
      item.cost * item.quantity,
    0
  );

  const shipping =
    subtotal > 50 ? 0 : 10;

  const tax = subtotal * 0.22;

  const total =
    subtotal + shipping + tax;

  const handlePayment = () => {
    const orders =
      JSON.parse(
        localStorage.getItem("orders")
      ) || [];

    orders.push({
      id: Date.now(),
      date:
        new Date().toLocaleDateString(),
      total,
      items: cart,
    });

    localStorage.setItem(
      "orders",
      JSON.stringify(orders)
    );

    dispatch(clearCart());

    localStorage.removeItem(
      "favorites"
    );

    window.dispatchEvent(
      new Event("favoritesUpdated")
    );

    alert(
      "🌱 Purchase completed successfully!"
    );

    navigate("/");
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "50px auto",
        padding: "30px",
      }}
    >
      <h1>Checkout</h1>

      <h3>
        Subtotal: $
        {subtotal.toFixed(2)}
      </h3>

      <h3>
        Shipping: $
        {shipping.toFixed(2)}
      </h3>

      <h3>
        Tax (22%): $
        {tax.toFixed(2)}
      </h3>

      <hr />

      <h2>
        Total: $
        {total.toFixed(2)}
      </h2>

      <button
        className="checkout-btn"
        onClick={handlePayment}
      >
        Pay Now
      </button>
    </div>
  );
}

export default Checkout;