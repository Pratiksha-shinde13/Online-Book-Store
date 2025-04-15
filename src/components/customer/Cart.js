import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice"; // ✅ Import Redux action
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart); // ✅ Get cart items from Redux
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id)); // ✅ Remove book from cart
  };

  const handlePlaceOrder = () => {
    alert("🎉 Order Placed Successfully!");
    navigate("/orders"); // ✅ Redirect to Orders Page
  };

  const handleGoToBooks = () => {
    navigate("/books"); // ✅ Redirect to Available Books Page
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#FFE4E1" }}> {/* Misty Rose */}
      <h2 style={{ color: "#000000" }}>🛒 Shopping Cart</h2> {/* Maroon */}
      {cart.length === 0 ? (
        <>
          <p style={{ color: "#333" }}>Your cart is empty.</p>
          <button 
            onClick={handleGoToBooks} 
            style={{ padding: "10px", marginTop: "10px", backgroundColor: "#800000", color: "white" }}
          >
            📚 Go to Available Books
          </button>
        </>
      ) : (
        <>
          {cart.map((book) => (
            <div 
              key={book._id} 
              style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center", 
                border: "1px solid #800000", 
                padding: "10px", 
                marginBottom: "10px", 
                backgroundColor: "#F8F0E3" // Light Beige
              }}
            >
              <div>
                <h3 style={{ color: "#800000" }}>{book.title}</h3> {/* Maroon */}
                <p style={{ color: "#333" }}>Author: {book.author}</p>
                <p style={{ color: "#333" }}>Price: ₹{book.price}</p>
              </div>
              {/* ✅ "Remove" button aligned to the right */}
              <button 
                onClick={() => handleRemoveFromCart(book._id)}
                style={{ backgroundColor: "#DC3545", color: "white", padding: "8px 12px", border: "none", cursor: "pointer" }}
              >
                🗑 Remove
              </button>
            </div>
          ))}
          {/* ✅ Buttons placed in a flex container for proper alignment */}
          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <button 
              onClick={handlePlaceOrder} 
              style={{ padding: "10px", backgroundColor: "#800000", color: "white" }}
            >
              ✅ Place Order
            </button>
            <button 
              onClick={handleGoToBooks} 
              style={{ padding: "10px", backgroundColor: "#800000", color: "white" }}
            >
              📚 Go to Available Books
            </button> 
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
