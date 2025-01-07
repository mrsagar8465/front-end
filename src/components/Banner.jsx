import React, { useState, useEffect } from "react";

const Banner = () => {
  const images = [
    "https://images.unsplash.com/photo-1597172300672-dbcdf33ac44e?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1534850336045-c6c6d287f89e?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.pexels.com/photos/26125152/pexels-photo-26125152/free-photo-of-the-milky-way-over-the-lake-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div
      className="relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40">
        <div className="text-center">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            Welcome to Our Website
          </h1>
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl">
            Discover the best products and services designed to elevate your
            experience.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="#"
              className="inline-block bg-white text-indigo-600 font-medium py-3 px-6 rounded-lg shadow hover:bg-gray-100 transition"
            >
              Get Started
            </a>
            <a
              href="#"
              className="inline-block bg-indigo-600 text-white font-medium py-3 px-6 rounded-lg shadow hover:bg-indigo-700 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-48 h-48 bg-indigo-400 opacity-50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-500 opacity-50 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Banner;
