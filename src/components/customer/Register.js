import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", user);
      alert("Registration Successful!");
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Register</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required style={styles.input} />
        <br />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required style={styles.input} />
        <br />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required style={styles.input} />
        <br />
        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "left",
    padding: "20px",
    backgroundColor: "#FFE4E1", // Misty Rose
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingLeft: "50px", // Moves content to the left
  },
  title: {
    fontSize: "24px", // Keep Register title size unchanged
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  input: {
    width: "200px",
    padding: "6px",
    fontSize: "13px",
  },
  button: {
    backgroundColor: "#800000", // Maroon
    color: "#fff",
    padding: "10px 15px",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
  },
};

export default Register;
