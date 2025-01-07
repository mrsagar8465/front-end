import React, { useEffect, useState } from 'react';

const ImageTextRow = () => {
  const [isVisible, setIsVisible] = useState(false);

  // IntersectionObserver to detect when elements are in the viewport
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
      { threshold: 0.4 } // Trigger when 40% of the element is in the viewport
    );

    const element = document.getElementById('content-row');
    if (element) observer.observe(element);

    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      id="content-row"
      className="flex flex-col-reverse lg:flex-row items-center justify-between lg:space-x-4 space-y-6 lg:space-y-0 p-4"
    >
      {/* Image Column */}
      <div
        className={`w-full lg:w-1/2 px-16 transform ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
        } transition-all duration-1000`}
      >
        <img
    src="https://images.unsplash.com/photo-1734452465230-f571caa4d7d5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="Description"
    className="w-full h-96 md:h-96 rounded-lg shadow-lg object-cover"
  />
      </div>

      {/* Text Column */}
      <div
        className={`w-full lg:w-1/2 px-4 py-4 lg:px-10 lg:py-10 transform ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
        } transition-all duration-1000`}
      >
        <h2 className="text-xl md:text-2xl font-bold mb-4">Sparrow</h2>
        <p className="text-sm md:text-base text-gray-700">
          Sparrows are small, primarily brown or gray Passeridae. They are among the most widespread and numerous birds globally, inhabiting a variety of environments, including grasslands, forests, and urban areas. Their adaptability to human-modified landscapes has led to their presence in cities and towns worldwide.
          <br />
          <br />
          <strong>Physical Characteristics:</strong> Sparrows typically have a stout and full-bodied appearance. Male sparrows often exhibit more vibrant plumage compared to females, with distinctive markings such as gray crowns, white cheeks, and black bibs. Females and young sparrows usually have more subdued, brownish tones with streaked patterns.
          <br />
          <br />
          <strong>Behavior and Diet:</strong> Sparrows are primarily granivorous but also consume insects during the breeding season. They are known for their energetic foraging behavior and often feed in flocks. Their songs and calls are varied and can be heard throughout the day.
        </p>
      </div>
    </div>
  );
};

export default ImageTextRow;
