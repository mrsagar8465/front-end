import React, { useEffect, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elementId = entry.target.id;
          if (entry.isIntersecting) {
            // Set the element as visible when it enters the viewport
            setIsVisible((prev) => ({
              ...prev,
              [elementId]: true,
            }));
          } else {
            // Reset visibility when it exits the viewport
            setIsVisible((prev) => ({
              ...prev,
              [elementId]: false,
            }));
          }
        });
      },
      { threshold: 0.5 } // Adjust to trigger at 50% visibility
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div id="page1">
      <div className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-green-600 text-white py-16 mt-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold">About Our Company</h1>
            <p className="mt-4 text-lg">
              Empowering the future of transportation with reliable and efficient               solutions.
            </p>
          </div>
        </section>
      </div>

      {/* About Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            id="about-content"
            className={`animate-on-scroll transform transition-all duration-1000 ${
              isVisible["about-content"]
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About icb </h2>
            <p className="text-gray-600 text-lg">
            We are a forward-thinking IT company dedicated to delivering innovative technology solutions that empower businesses to succeed in the digital age. With a focus on excellence and customer-centricity, we provide a wide range of services, from software development and IT consulting to cloud solutions, cybersecurity, and digital transformation strategies.

Our team of skilled professionals combines technical expertise with industry knowledge, enabling us to understand our clients' unique challenges and craft tailored solutions that drive efficiency, growth, and sustainability. We believe in fostering long-term partnerships with our clients, working collaboratively to achieve their business goals through cutting-edge technology and strategic insights.
            </p>
            <p className="text-gray-600 text-lg mt-4">
              Our charging stations are equipped with the latest technology to ensure your
              vehicle is charged quickly and efficiently, so you can focus on the road ahead.
            </p>
          </div>
          {/* Image */}
          <div
            id="about-image"
            className={`animate-on-scroll transform transition-all duration-1000 ${
              isVisible["about-image"]
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="EV Charging"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {["Hosting Website", "Eco-Friendly", "Widespread Network", "24/7 Support", "Affordable Rates", "User-Friendly App"].map(
              (feature, index) => (
                <div
                  key={index}
                  id={`feature-${index}`}
                  className={`animate-on-scroll bg-white p-6 rounded-lg shadow-md transform transition-all duration-1000 ${
                    isVisible[`feature-${index}`]
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  <h3 className="text-xl font-semibold text-green-600 mb-4">
                    {feature}
                  </h3>
                  <p className="text-gray-600">
                    {`Description for ${feature}.`}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 text-white py-16">
        <div
          id="call-to-action"
          className={`animate-on-scroll transform transition-all duration-1000 ${
            isVisible["call-to-action"]
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold">Ready to visit my website</h2>
            <p className="mt-4 text-lg">
              Join our growing community of  enthusiasts. Experience the convenience and
              reliability of our Services
            </p>
            <button className="mt-6 bg-white text-green-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200">
              Find your Points
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
