import React from "react";
import { Link } from "react-router-dom";

const CustomerDashboard = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Welcome to Your Dashboard</h2>
      <div style={styles.menu}>
        <Link to="/books" style={styles.link}>📚 Browse Books</Link>
        <Link to="/orders" style={styles.link}>🛒 My Orders</Link>
        <Link to="/profile" style={styles.link}>👤 Update Profile</Link>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    minHeight: "80vh", 
    backgroundColor: "#FFE4E1", // Misty Rose
  },
  heading: {
    color: "#000000", // Maroon
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    gap: "10px", // Adjusted spacing
    alignItems: "center",
    marginTop: "30px",
  },
  link: {
    textDecoration: "none",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#800000", // Maroon
    padding: "10px 20px", // Reduced height
    borderRadius: "5px",
    width: "150px", // Ensuring uniform width
    textAlign: "center",
    transition: "0.3s",
  },
};

export default CustomerDashboard;
