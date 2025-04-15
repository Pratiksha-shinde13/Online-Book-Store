import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [updatedUser, setUpdatedUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("Please log in again.");
        navigate("/login");
        return;
      }

      try {
        const config = { headers: { Authorization: `Bearer ${token}` } };
        const { data } = await axios.get("http://localhost:5000/api/customers/profile", config);
        setUser({ name: data.name, email: data.email, password: "" });
      } catch (err) {
        setError("Failed to load profile. Please log in again.");
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    fetchUserProfile();
  }, [navigate]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("token");
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const { data } = await axios.put("http://localhost:5000/api/customers/profile", user, config);

      alert("Profile Updated Successfully!");
      setUpdatedUser({ name: user.name, email: user.email });
      setUser({ name: "", email: "", password: "" });

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (err) {
      setError("Error updating profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Update Profile</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleUpdate} style={styles.form}>
        <input type="text" name="name" placeholder="Enter new name" value={user.name} onChange={handleChange} required style={styles.input} />
        <input type="email" name="email" placeholder="Enter new email" value={user.email} onChange={handleChange} required style={styles.input} />
        <input type="password" name="password" placeholder="New Password (Optional)" value={user.password} onChange={handleChange} style={styles.input} />
        
        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>

      {updatedUser && (
        <div>
          <h3>Updated Profile:</h3>
          <p><strong>Name:</strong> {updatedUser.name}</p>
          <p><strong>Email:</strong> {updatedUser.email}</p>
        </div>
      )}

      <button onClick={() => navigate("/customer/dashboard")} style={styles.button}>
        Go to Dashboard
      </button>
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
    fontSize: "24px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  input: {
    width: "250px",
    padding: "6px",
    fontSize: "14px",
  },
  button: {
    width: "200px", // Uniform width for all buttons
    height: "35px", // Uniform height for all buttons
    backgroundColor: "#800000", // Maroon
    color: "#fff",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
    textAlign: "center",
    marginTop: "10px",
  },
};

export default Profile;
