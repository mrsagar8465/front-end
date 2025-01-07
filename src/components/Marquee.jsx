import React, { useState, useEffect } from "react";

export default function Marquee() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const navbarHeight = 64; // Adjust this based on your navbar height (e.g., 64px for `h-16`)

      if (scrollPosition >= navbarHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
   

      {/* Marquee */}
      <div
        className={`bg-teal-500  overflow-hidden ${
          isFixed ? "fixed top-16 w-full z-10" : "relative"
        }`}
      >
        <div className=" flex animate-marquee space-x-4 py-2">
          {/* Add marquee items */}
          <p className="text-black text-lg font-semibold">Welcome to my website</p>
         
        </div>
      </div>

      
     
    </div>
  );
}


