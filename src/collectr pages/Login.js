import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
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
    </div>
  );
};

export default Login;
