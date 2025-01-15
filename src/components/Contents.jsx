import React, { useEffect, useState } from "react";

const Content2 = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer callback to check if element is in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Element is in the viewport
          } else {
            setIsVisible(false); // Element is out of the viewport
          }
        });
      },
      { threshold: 0.3 } // Trigger animation when at least 50% of the element is in the viewport
    );

    const element = document.getElementById("content");
    if (element) observer.observe(element);

    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="flex flex-col-reverse lg:flex-row items-center justify-between lg:space-x-4 space-y-6 lg:space-y-0 p-4"
      id="content"
    >
      {/* Text Column with animation */}
      <div
        className={`w-full lg:w-1/2 px-16 transform ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
        } transition-transform duration-1000`}
      >
        <h2 className="text-xl md:text-2xl font-bold mb-4 lg:mx-10 px-32">Information</h2>
        <p className="text-sm md:text-base text-gray-700 lg:px-5">
          Your description or content goes here. You can add any text or
          information related to the image on the left side. A photoshoot can
          range from a simple portrait session to a highly elaborate and
          conceptual production. Regardless of the scale, it requires good
          planning, creativity, and technical skills to produce compelling
          images. Whether it's capturing a significant event, promoting a
          brand, or creating works of art, photoshoots are an essential part of
          visual storytelling and communication. Preparation: Plan ahead,
          especially if it’s a complex shoot with multiple people, locations, or
          props. This reduces stress and makes everything run more smoothly.
          Communicate Clearly: Both the photographer and the models need to
          understand each other’s expectations, so there’s no confusion about
          the desired outcome. Keep It Relaxed: Photoshoots can be tense, but
          it's important to create a relaxed atmosphere so that the subject
          feels comfortable, which will help them produce better, more natural
          photos. 
        </p>
      </div>

      {/* Image Column with animation */}
      <div
        className={`w-full lg:w-1/2 p-6 pr-16 transform ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
        } transition-transform duration-1000`}
      >
        <img
          src="https://images.unsplash.com/photo-1608086042577-50e786b68c84?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Description"
          className="w-full h-auto rounded-full shadow-lg"
        />
      </div>
    </div>
  );
};

export default Content2;
