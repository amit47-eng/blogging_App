import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";



const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:5001/api/v1/user/login",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Logged in:", response.data);

      // Navigate to the home page after successful login
      navigate("/"); // Change "/home" to your actual home route
    } catch (error) {
      console.error("Error logging in user:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
