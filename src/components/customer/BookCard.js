import React from "react";
import { useSelector } from "react-redux";
import OrderBook from "./OrderBook";

const BookCard = ({ book }) => {
  const user = useSelector((state) => state.auth.user); // Get logged-in user

  return (
    <div className="border rounded-lg p-4 shadow-lg">
      <h2 className="text-xl font-semibold">{book.title}</h2>
      <p className="text-gray-600">Author: {book.author}</p>
      <p className="text-green-600 font-bold">${book.price}</p>

      {/* Show Order Now button only if user is logged in */}
      {user ? <OrderBook bookId={book._id} userId={user._id} /> : <p>Please login to order</p>}
    </div>
  );
};

export default BookCard;
