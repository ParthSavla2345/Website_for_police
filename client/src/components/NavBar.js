import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./NavBar.css";

function NavBar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to handle mobile menu toggle

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser); // Update state with user data
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null); // Update the state to reflect the logout
    navigate("/login"); // Navigate to login
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu visibility
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Police Portal</div>

      {/* Mobile Menu Toggle */}
      <button 
        className={`navbar-toggle ${isMobileMenuOpen ? "open" : ""}`} 
        onClick={toggleMobileMenu}
      >
        ☰
      </button>

      <div className={`navbar-links ${isMobileMenuOpen ? "show" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/news">News</Link>

        {/* If no user is logged in, show Login and Register */}
        {user === null ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register" className="register-button">Register</Link>
          </>
        ) : user.role === 0 ? ( // Victim User role (0)
          <>
            <Link to="/user">User Dashboard</Link>
          </>
        ) : user.role === 1 ? ( // Police Officer role (1)
          <>
            <Link to="/police">Police Dashboard</Link>
            <Link to="/fir">FIR</Link>
            <Link to="/stats">Stats</Link>
            <Link to="/cases">Cases</Link>
            <Link to="/discord-chat" className="discord-chat-link">Discord Chat</Link> {/* Only visible for Police */}
          </>
        ) : null}

        {/* Dropdown for profile & logout */}
        {user && (
          <div className="dropdown">
            <button className="dropbtn">{user.username} ▼</button>
            <div className="dropdown-content">
              <button onClick={handleLogout} className="logout-button">Logout</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
