import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>📚 Welcome to the Online Book Store</h1>
      <p style={styles.paragraph}>Find your favorite books at the best prices!</p>
      <div style={styles.menu}>
        <Link to="/books" style={styles.link}>📖 Browse Books</Link>
        <Link to="/login" style={styles.link}>🔑 Login</Link>
        <Link to="/register" style={styles.link}>📝 Register</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#FFE4E1", // Misty Rose
    minHeight: "100vh",
  },
  paragraph: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#004080", // Dark Blue
    margin: "10px 0",
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    alignItems: "center",
    marginTop: "20px",
  },
  link: {
    textDecoration: "none",
    fontSize: "18px",
    color: "#fff",
    backgroundColor: "#800000", // Maroon
    padding: "8px 20px", // Reduced height while keeping width same
    borderRadius: "5px",
    fontWeight: "bold",
    transition: "background-color 0.3s, transform 0.2s",
    textAlign: "center",
    width: "200px",
    display: "inline-block",
    textTransform: "uppercase",
  },
  linkHover: {
    backgroundColor: "#600000",
    transform: "scale(1.05)",
  },
};

export default Home;
