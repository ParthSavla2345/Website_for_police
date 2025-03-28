import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Police Portal</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="user">User Dashboard</Link>
        <Link to="/news">News</Link>
        <Link to="/police">Police Dashboard</Link>
        <Link to="/fir">FIR</Link>
        <Link to="/discord">Discord</Link>
        <Link to="/stats">Stats</Link>
        <Link to="/cases">Cases</Link>
      </div>
    </nav>
  );
}

export default NavBar;
