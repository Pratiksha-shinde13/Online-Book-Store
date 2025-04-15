import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", credentials);
      console.log("Login Response Data:", res.data);
      if (res.data && res.data.user) {
        dispatch(loginSuccess(res.data));
        alert("Login Successful!");
        navigate(res.data.user.role === "admin" ? "/admin/dashboard" : "/customer/dashboard");
      } else {
        alert("Invalid login response. Please try again.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Check your credentials.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required style={styles.input} />
        <br />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required style={styles.input} />
        <br />
        <button type="submit" style={styles.button}>Login</button>
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
    paddingLeft: "50px",
  },
  title: {
    fontSize: "24px", // Keep Login title size unchanged
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

export default Login;
