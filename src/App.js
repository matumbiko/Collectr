import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./collectr pages/Dashboard";
import Home from "./collectr pages/Home";
import Login from  "./collectr pages/Login";

function App() {
  return (
    <div>
      {/* Navigation */}
      <nav>
        
        <Link to="/">Home</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/Login">Login</Link>
          
      </nav>
       {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
