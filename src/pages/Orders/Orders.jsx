import React from "react";

function Orders() {
  const orders =
    JSON.parse(
      localStorage.getItem("orders")
    ) || [];

  return (
    <div
      style={{
        padding: "40px",
      }}
    >
      <h1>Order History</h1>

      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            style={{
              border: "1px solid #333",
              padding: "20px",
              marginBottom: "20px",
              borderRadius: "12px",
            }}
          >
            <h3>
              Order #
              {order.id}
            </h3>

            <p>
              Date:
              {" "}
              {order.date}
            </p>

            <p>
              Total: $
              {order.total.toFixed(2)}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;