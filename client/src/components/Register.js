import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the Toastify styles
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirecting
import "./Register.css";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "", // The role is initially an empty string, waiting for the user to select
  });

  const navigate = useNavigate(); // Initialize the navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword, role } = formData;

    // Ensure role is converted to an integer
    const roleInt = parseInt(role, 10);

    // Check if the password and confirm password match
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!"); // Show toast
      return;
    }

    // Validate role input: should be either 0 or 1
    if (roleInt !== 0 && roleInt !== 1) {
      toast.error("Invalid role selected!"); // Show toast
      return;
    }

    try {
      // Log the data to make sure role is an integer
      console.log("Sending request to /api/v1/auth/register with:", { username, email, password, roleInt });

      // Send the data to the backend with role as an integer
      const response = await axios.post("/api/v1/auth/register", {
        username,
        email,
        password,
        role: roleInt, // Ensure role is sent as an integer
      });

      // Log the response to ensure it is successful
      console.log("Response:", response.data);

      // Show success toast
      toast.success("You have registered successfully!");

      // Redirect to the login page after successful registration
      setTimeout(() => {
        navigate("/login"); // Navigate to the login page after a short delay
      }, 1000); // 2 seconds delay to allow the toast to show

      // Reset form after successful registration
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "", // Reset role after successful registration
      });
      
    } catch (error) {
      console.error("Error details:", error.response || error);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div className="register-container">
      <h2>Create Account</h2>

      <form onSubmit={handleSubmit} className="register-form">
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
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
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
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Role:</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="">Select Role</option>
            <option value="0">User</option>
            <option value="1">Police</option>
          </select>
        </div>
        <button type="submit" className="register-button">Register</button>
      </form>

      <div className="login-link">
        <p>Already have an account? <a href="/login">Login</a></p>
      </div>

      {/* Toast Container for toast notifications */}
      <ToastContainer />
    </div>
  );
}

export default Register;
