import React, { useEffect, useState } from "react";

function ImageGrid() {
  const [isVisible, setIsVisible] = useState(false);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1656522750259-6ea8a33160c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "JSW MG Motors",
      description: "Explore JSW MG Motors' latest offerings and innovations.",
    },
    {
      src: "https://images.unsplash.com/photo-1518893714388-8ed554f8471b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdyaWQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "BluSmart Deal",
      description: "Discover the exciting new deals from BluSmart.",
    },
    {
      src: "https://images.unsplash.com/photo-1656522750309-9aa40dc5896b?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Ford Pro Initiative",
      description: "Learn about Ford's new Pro Initiative and goals.",
    },
    {
      src: "https://images.unsplash.com/photo-1622976480033-d7458ff18425?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Toyota EV Expansion",
      description: "Dive into Toyota's plans for EV expansion.",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1675342786681-e33a19414cfd?q=80&w=1490&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "EV Charging Solutions",
      description: "Find out about cutting-edge EV charging solutions.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("image-grid");
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-center bg-gray-100 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">
        Explore Our Gallery
      </h2>
      {/* Grid of Images */}
      <div
        id="image-grid"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`group w-full h-60 bg-gray-200 rounded-lg overflow-hidden transform ${
              isVisible
                ? index < 2
                  ? "-translate-x-10 opacity-100"
                  : index > 2
                  ? "translate-x-10 opacity-100"
                  : "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            } transition-all duration-1000`}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGrid;
