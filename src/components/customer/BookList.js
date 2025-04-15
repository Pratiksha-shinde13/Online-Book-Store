import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/books")
      .then((res) => setBooks(res.data))
      .catch((err) => console.error("Error fetching books:", err));
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: "#FFE4E1", color: "#4A0905", padding: "20px" }}> 
      <h2 style={{ color: "#000000" }}>Available Books</h2>
      
      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "8px", width: "100%", marginBottom: "10px", backgroundColor: "#FFF5EE", border: "1px solid #800000", color: "#4A0905" }}
      />
      
      <ul>
        {filteredBooks.map((book) => (
          <React.Fragment key={book._id}>
            <li style={{ color: "#4A0905" }}>
              <Link to={`/books/${book._id}`} style={{ color: "#B22222", fontWeight: "bold" }}>{book.title}</Link> - {book.author} - ₹{book.price}
            </li>
            <br /><br />
          </React.Fragment>
        ))}
      </ul>

      {filteredBooks.length === 0 && <p style={{ color: "#B22222" }}>No books found.</p>}
    </div>
  );
};

export default BookList;
