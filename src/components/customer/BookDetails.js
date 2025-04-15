import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice"; // ✅ Import addToCart action

const BookDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/books/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => setError(err.response?.data?.message || "Error fetching book details"));
  }, [id]);

  const handleAddToCart = () => {
    if (book) {
      dispatch(addToCart(book)); // ✅ Add book to cart in Redux
      navigate("/cart"); // ✅ Redirect to Cart Page
    }
  };

  if (error) {
    return <h2 style={{ color: "red" }}>⚠️ {error}</h2>;
  }

  return (
    <div style={{ padding: "20px", backgroundColor: "#FFE4E1", minHeight: "100vh" }}> {/* Misty Rose background */}
      {book ? (
        <>
          <h2 style={{ color: "#000000" }}>{book.title}</h2> {/* Maroon title */}
          <p style={{ color: "#333" }}>Author: {book.author}</p>
          <p style={{ color: "#333" }}>Price: ₹{book.price}</p>
          <button 
            onClick={handleAddToCart} 
            style={{ backgroundColor: "#800000", color: "white", padding: "10px 15px", border: "none", fontSize: "16px", cursor: "pointer" }}
          >
            Add to Cart
          </button> {/* ✅ Styled Add to Cart Button */}
        </>
      ) : (
        <p style={{ color: "#800000" }}>Loading...</p>
      )}
    </div>
  );
};

export default BookDetails;
