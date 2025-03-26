import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; // Import ToastContainer here
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(""); // Clear error message on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = formData;
  
    try {
      const response = await axios.post("/api/v1/auth/login", {
        username,
        password,
      });
  
      // Store token and user data in localStorage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
  
      // Show the toast notification
      toast.success("Login successful!");
  
      // Wait for a moment and then navigate to the landing page
      setTimeout(() => {
        navigate("/news");  // Adjust to the correct path
      }, 1000);  // Allow time for the toast to show
    } catch (error) {
      toast.error(error.response?.data.error || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">Login</button>
      </form>

      <div className="redirect-link">
        <p>Don't have an account?<a href="/register"> Register here</a></p>
      </div>

      {/* Add the ToastContainer here */}
      <ToastContainer />
    </div>
  );
}

export default Login;
