import React, { useState, useEffect } from "react";

const Banner = () => {
  const images = [
    "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/355241/pexels-photo-355241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1420709/pexels-photo-1420709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <div>
      <div
        className="relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white pt-4 pb-10"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl py-10">
              Contact us
            </h1>
            <p className="mt-4 text-lg sm:text-xl lg:text-2xl">
              home/page/ourcontact
            </p>
          </div>
        </div>
      </div>


      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-16">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Side - Company Address */}
        <div className="p-6 lg:p-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="mb-6">
            Reach out to us for any queries or assistance. We are here to help
            you!
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Address:</h3>
              <p>123 Business Avenue, Suite 456</p>
              <p>Cityville, Country 78910</p>
            </div>
            <div>
              <h3 className="font-semibold">Phone:</h3>
              <p>+1 (123) 456-7890</p>
            </div>
            <div>
              <h3 className="font-semibold">Email:</h3>
              <p>info@company.com</p>
            </div>
          </div>
        </div>

     {/* Right Side - Compact Form */}
{/* Right Side - Compact Form with Colors */}
<div className="p-6 lg:p-10 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg shadow-md">
  <h2 className="text-xl font-bold mb-4 text-blue-600">Send Us a Message</h2>
  <form className="space-y-4">
    <div className="flex items-center space-x-4">
      <label
        htmlFor="name"
        className="block text-sm font-medium text-gray-700 w-20"
      >
        Name:
      </label>
      <input
        type="text"
        id="name"
        className="flex-1 border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 p-1 bg-gray-50"
        placeholder="Your Name"
      />
    </div>
    <div className="flex items-center space-x-4">
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700 w-20"
      >
        Email:
      </label>
      <input
        type="email"
        id="email"
        className="flex-1 border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 p-1 bg-gray-50"
        placeholder="Your Email"
      />
    </div>
    <div className="flex items-center space-x-4">
      <label
        htmlFor="contactnumber"
        className="block text-sm font-medium text-gray-700 w-20"
      >
        Contact:
      </label>
      <input
        type="tel"
        id="contactnumber"
        className="flex-1 border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 p-1 bg-gray-50"
        placeholder="Your Contact Number"
      />
    </div>
    <div className="flex items-start space-x-4">
      <label
        htmlFor="message"
        className="block text-sm font-medium text-gray-700 w-20"
      >
        Message:
      </label>
      <textarea
        id="message"
        rows="3"
        className="flex-1 border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 p-1 bg-gray-50"
        placeholder="Your Message"
      ></textarea>
    </div>
    <div>
      <button
        type="submit"
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-1 px-4 rounded-md shadow-md hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300"
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
