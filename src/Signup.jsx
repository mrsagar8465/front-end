import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "./Services/User_Service";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    contactnumber: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { username, contactnumber, email, password, confirmpassword } = formData;

    if (!username || !contactnumber || !email || !password || !confirmpassword) {
      return "All fields are required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Invalid email address.";
    }

    const contactNumberRegex = /^\d{10}$/;
    if (!contactNumberRegex.test(contactnumber)) {
      return "Contact number must be 10 digits.";
    }

    if (password !== confirmpassword) {
      return "Passwords do not match.";
    }

    if (password.length < 6) {
      return "Password must be at least 6 characters long.";
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const response = await signUp(formData);
  
      // Check if the response contains a success property and handle accordingly
      if (response?.success || response?.status === "success") {
        setSuccessMessage("Signup successful! Redirecting to login...");
       
      } else {
        // Use a fallback message if the response doesn't have a clear error message
        setError(response?.message || "save data succesfull! .");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred during signup.");
    }
  };

  const handleReset = () => {
    setFormData({
      username: "",
      contactnumber: "",
      email: "",
      password: "",
      confirmpassword: "",
    });
    setError("");
    setSuccessMessage("");
  };

  return (
    <div className="pb-10 pt-4 min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-800 via-blue-900 to-indigo">
      {successMessage && (
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-6 rounded shadow-lg font-medium">
          {successMessage}
        </div>
      )}
      <div className="bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg p-12 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-white text-center mb-6">Sign Up</h1>
        {error && <p className="text-red-500 text-center mb-4 font-medium">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 bg-gray-700 text-gray-300 placeholder-gray-500 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-400"
                placeholder="Enter name"
              />
            </div>
            <div>
              <label htmlFor="contactnumber" className="block text-sm font-medium text-gray-300">
                Contact
              </label>
              <input
                type="text"
                id="contactnumber"
                name="contactnumber"
                value={formData.contactnumber}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 bg-gray-700 text-gray-300 placeholder-gray-500 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-400"
                placeholder="Contact number"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 bg-gray-700 text-gray-300 placeholder-gray-500 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-400"
              placeholder="Enter email"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 bg-gray-700 text-gray-300 placeholder-gray-500 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-400"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="confirmpassword" className="block text-sm font-medium text-gray-300">
                Confirm
              </label>
              <input
                type="password"
                id="confirmpassword"
                name="confirmpassword"
                value={formData.confirmpassword}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 bg-gray-700 text-gray-300 placeholder-gray-500 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-400"
                placeholder="Confirm password"
              />
            </div>
          </div>
          <div className="flex justify-between space-x-4">
            <button
              type="reset"
              onClick={handleReset}
              className="w-1/2 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:ring-2 focus:ring-red-400 transition-all duration-300"
            >
              Reset
            </button>
            <button
              type="submit"
              className="w-1/2 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </form>
        <p className="mt-6 text-center text-gray-400">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium text-blue-400 hover:text-blue-500 transition-all duration-300"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
