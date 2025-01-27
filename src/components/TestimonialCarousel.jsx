import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Testimonials = [
  {
    name: "LusDen",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Zen Court",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    review: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    review: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    name: "Emma Smith",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    review: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
  },
  {
    name: "Alex Brown",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    review: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
  },
  {
    name: "Sophia Lee",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    review: "Mollit anim id est laborum.",
  },
];

function TestimonialCarousel() {
  const slides = Testimonials.reduce((acc, testimonial, index) => {
    if (index % 3 === 0) acc.push([]);
    acc[acc.length - 1].push(testimonial);
    return acc;
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold">
        What says our <span className="text-primary">Customers</span>
      </h2>

      <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {slides.map((group, i) => (
            <div className={`carousel-item ${i === 0 ? "active" : ""}`} key={i}>
              <div className="row">
                {group.map((testimonial, j) => (
                  <div className="col-md-4" key={j}>
                    <div className="card p-3 text-center shadow">
                      <img
                        src={testimonial.image}
                        className="rounded-circle mx-auto mb-3"
                        alt={testimonial.name}
                        width="80"
                        height="80"
                      />
                      <h5>{testimonial.name}</h5>
                      <p className="text-muted">{testimonial.review}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  );
}

export default TestimonialCarousel;
