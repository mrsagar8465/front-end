import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userLogin } from "./components/common/User_Service"; // Ensure this path is correct

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleLogin = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.username)) {
      return "Please enter a valid email address.";
    }
    if (formData.password.length < 6) {
      return "Password must be at least 6 characters long.";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      // Correct way to pass the username and password
      const response = await userLogin(formData.username, formData.password); // Pass username and password directly
  
      if (response?.success) {
        alert("Login successful!");
        navigate("/admin/"); // Navigate to admin2 page
      } else {
        setError(response?.message || "Invalid email or password.");
      }
    } catch (err) {
      // Handle error from userLogin function
      // Use err.message directly
      setError(err?.message || "An error occurred. Please try again.");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-800 via-blue-900 to-indigo">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg p-8 w-full max-w-md border border-white/20">
        <h1 className="text-3xl font-bold text-white text-center mb-6">Login to Your Account</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <p className="text-red-500 text-sm text-center font-medium">{error}</p>}

          <div>
            <label htmlFor="username" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleLogin}
              className="w-full mt-2 px-4 py-2 bg-white/10 text-white placeholder-gray-300 border border-transparent rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleLogin}
              className="w-full mt-2 px-4 py-2 bg-white/10 text-white placeholder-gray-300 border border-transparent rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-400 hover:to-blue-500 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition-transform transform hover:scale-105"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-white">
          Don't have an account?{" "}
          <a href="/signup" className="font-medium text-blue-300 hover:text-blue-500">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
