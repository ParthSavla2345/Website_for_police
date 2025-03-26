import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import PoliceDashboard from "./components/PoliceDashboard";
import CurNews from "./components/CurNews";
import PoliceStats from "./components/PoliceStats";
import Cases1 from "./components/Cases1";
import UserAlerts from "./components/userAlerts";
import UserDashboard from "./components/UserDashboard";
import ReportingAlert from "./components/ReportingAlert";
import Fir from "./components/Fir";
import LandingPage from "./components/LandingPage";
import Register from "./components/Register";
import Login from "./components/Login"; // Add this
import "./App.css";

function App() {
  const location = useLocation();  // Hook to get the current route
  
  return (
    <>
      {/* Conditionally render NavBar based on the current route */}
      {location.pathname !== "/login" && location.pathname !== "/register" && <NavBar />}
      
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/news" element={<CurNews />} />
          <Route path="/stats" element={<PoliceStats />} />
          <Route path="/cases" element={<Cases1 />} />
          <Route path="/alerts" element={<UserAlerts />} />
          <Route path="/police" element={<PoliceDashboard />} />
          <Route path="/report" element={<ReportingAlert />} />
          <Route path="/fir" element={<Fir />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} /> {/* Added Login route */}
        </Routes>
      </div>
    </>
  );
}

export default App;
