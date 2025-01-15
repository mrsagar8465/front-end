import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const Banner = () => {
  const images = [
    "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/355241/pexels-photo-355241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1420709/pexels-photo-1420709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/contact/submit", formData);
      setResponseMessage(response.data.message || "Thank you for contacting us!");
      setFormData({ name: "", email: "", contact: "", message: "" });
    } catch (error) {
      setResponseMessage(
        error.response?.data?.message || "Something went wrong. Please try again."
      );
    }
  };

  return (
    <div>
      <Navbar/>
      <div
        className="relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-40 text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl">home/page/ourcontact</p>
        </div>
      </div>

      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white shadow-md rounded-lg overflow-hidden">
          {/* Left Section */}
          <div className="p-4 lg:p-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <h2 className="text-lg font-bold mb-3">Contact Us</h2>
            <p className="mb-4 text-sm">
              Reach out to us for any queries or assistance. We are here to help you!
            </p>
            <div className="space-y-2 text-sm">
              <div>
                <h3 className="text-lg font-bold ">Address:</h3>
                <p>123 Business Avenue, Suite 456</p>
                <p>Cityville, Country 78910</p>
              </div>
              <div>
                <h3 className="text-lg font-bold ">Phone:</h3>
                <p>+1 (123) 456-7890</p>
              </div>
              <div>
                <h3 className="text-lg font-bold ">Email:</h3>
                <p>info@company.com</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="p-4 lg:p-6 bg-gray-300">
            <h2 className="text-base font-bold mb-3 text-blue-600">
              Send Us a Message
            </h2>
            {responseMessage && (
              <p className="mb-3 text-green-600 font-medium text-sm">{responseMessage}</p>
            )}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 w-72 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm p-1"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 w-72 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm p-1"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label
                  htmlFor="contact"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contact:
                </label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  className="mt-1 w-72 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm p-1"
                  placeholder="Your Contact Number"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 w-72 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm p-1"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-36 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium py-1 px-2 rounded-md shadow-md hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 text-sm"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
