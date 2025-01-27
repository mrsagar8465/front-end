import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-gray-300 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* link section */}
        
          



          {/* About Section */}

          <div>
            <h3 className="px-36 text-lg font-semibold text-white">About Us</h3>
            <ul className="mt-2 space-y-2 px-36">
            <li>
                <a href="/" className="text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/service" className="text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="/about" className="text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className=" px-20 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2 px-20">
              <li>
                <a href="/" className="text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/service" className="text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="/about" className="text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className=" px-20 text-lg font-semibold text-white">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <span className="font-medium">Email:</span>{" "}
                <a href="mailto:info@example.com" className="hover:text-white">
                  Mrsagar@gmail.com
                </a>
              </li>
              <li>
                <span className="font-medium">Phone:</span>{" "}
                <a href="tel:+9134567890" className="text-white">
                  +918979097256
                </a>
              </li>
              <li>
                <span className="font-medium">Address:</span> Greater Nodia ,Guar City, India
                <div className="flex space-x-4 mt-4 sm:mt-0">
            <a
              href="#"
              className="hover:text-white transition"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="hover:text-white transition"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="hover:text-white transition"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="hover:text-white transition"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>

              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white-700 mt-2"></div>

        {/* Bottom Section */}
        <div className="mt-2 mb-0 flex flex-col sm:flex-wrap justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                  </div>
      </div>
    </footer>
  );
};

export default Footer;
