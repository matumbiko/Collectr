import React, { useState } from "react";
import { Link } from "react-router-dom";



  const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulate API call (replace with your backend login)
    setTimeout(() => {
      if (email === "user@example.com" && password === "password123") {
        onLogin({ email }); // Notify parent component
      } else {
        setError("Invalid credentials");
      }
      setLoading(false);
    }, 1000);
  };


  return ( 
    <div>
      <h1>Welcome to Collectr</h1>

      <ol>
          <li><Link to="/dashboard">
            <button>GO TO DASHBOARD</button>
          </Link></li>
       <li>
          <Link to="/">
            <button>GO TO HOME</button>
          </Link>
          </li>
        </ol>
    
   <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" disabled={loading} style={{ padding: "10px 20px" }}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
    </div>
  );
};
// eslint-disable-next-line

export default Login;
