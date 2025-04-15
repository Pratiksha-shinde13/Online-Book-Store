import React from "react";
import { useSelector } from "react-redux";

const Orders = () => {
  const orders = useSelector((state) => state.orders); // ✅ Get orders from Redux

  return (
    <div style={{ padding: "20px", backgroundColor: "#F8F0E3" }}> {/* Light Beige */}
      <h2 style={{ color: "#000000" }}>📦 My Orders</h2> {/* Maroon */}
      {orders.length === 0 ? (
        <p style={{ color: "#333" }}>No orders found.</p>
      ) : (
        <>
          {orders.map((order, index) => (
            <div 
              key={index} 
              style={{ 
                border: "1px solid #800000", 
                padding: "10px", 
                marginBottom: "10px", 
                backgroundColor: "#FFE4E1" // Misty Rose
              }}
            >
              <h3 style={{ color: "#800000" }}>Order #{index + 1}</h3> {/* Maroon */}
              {order.map((book) => (
                <div key={book._id}>
                  <p style={{ color: "#333" }}>📖 {book.title} - ₹{book.price}</p>
                </div>
              ))}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Orders;
