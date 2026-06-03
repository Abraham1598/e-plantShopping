import React from "react";
import "./CartItem.css";

import {
  useSelector,
  useDispatch,
} from "react-redux";

import {
  removeItem,
  updateQuantity,
} from "../../redux/CartSlice";

import { useNavigate } from "react-router-dom";

function CartItem() {
  const cart = useSelector(
    (state) =>
      Array.isArray(state.cart?.items)
        ? state.cart.items
        : []
  );

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const subtotal = cart.reduce(
    (acc, item) =>
      acc + item.cost * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 10 : 0;

  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h1>🛒 Your Cart is Empty</h1>

        <p>
          Discover our premium plant
          collection.
        </p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1 className="cart-title">
        Shopping Cart
      </h1>

      {cart.map((item) => (
        <div
          key={item.name}
          className="cart-item"
        >
          <img
            src={item.image}
            alt={item.name}
          />

          <div className="cart-details">
            <h2>{item.name}</h2>

            <p className="item-price">
              ${item.cost}
            </p>

            <p className="item-total">
              Total:
              <strong>
                $
                {(
                  item.cost *
                  item.quantity
                ).toFixed(2)}
              </strong>
            </p>

            <div className="quantity-box">
              <button
                onClick={() => {
                  if (
                    item.quantity > 1
                  ) {
                    dispatch(
                      updateQuantity({
                        name: item.name,
                        quantity:
                          item.quantity - 1,
                      })
                    );
                  }
                }}
              >
                −
              </button>

              <span className="quantity-value">
                {item.quantity}
              </span>

              <button
                onClick={() =>
                  dispatch(
                    updateQuantity({
                      name: item.name,
                      quantity:
                        item.quantity + 1,
                    })
                  )
                }
              >
                +
              </button>
            </div>

            <button
              className="delete-btn"
              onClick={() =>
                dispatch(
                  removeItem(item.name)
                )
              }
            >
              Remove Item
            </button>
          </div>
        </div>
      ))}

      <div className="cart-summary">
        <h2>
          Subtotal:
          <span>
            ${subtotal.toFixed(2)}
          </span>
        </h2>

        <h2>
          Shipping:
          <span>
            ${shipping.toFixed(2)}
          </span>
        </h2>

        <h1>
          Total:
          <span>
            ${total.toFixed(2)}
          </span>
        </h1>

        <button
          className="checkout-btn"
          onClick={() =>
            navigate("/checkout")
          }
        >
          Secure Checkout →
        </button>
      </div>
    </div>
  );
}

export default CartItem;