import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchBooks = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/books").then((res) => setBooks(res.data));
  }, []);

  return (
    <div>
      <h2>Search Books</h2>
      <input type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
      <ul>
        {books
          .filter((book) => book.title.toLowerCase().includes(search.toLowerCase()))
          .map((book) => (
            <li key={book.id}>{book.title} - {book.author}</li>
          ))}
      </ul>
    </div>
  );
};

export default SearchBooks;
