import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const teamData = [
  { name: "Joseph Brown", role: "Marketing Head", image: "https://randomuser.me/api/portraits/men/10.jpg" },
  { name: "Nancy White", role: "Marketing Head", image: "https://randomuser.me/api/portraits/women/10.jpg" },
  { name: "Earl Martinez", role: "Marketing Head", image: "https://randomuser.me/api/portraits/men/11.jpg" },
  { name: "Josephine Allard", role: "Marketing Head", image: "https://randomuser.me/api/portraits/women/11.jpg" },
  { name: "Michael Doe", role: "Sales Head", image: "https://randomuser.me/api/portraits/men/12.jpg" },
  { name: "Emily Carter", role: "HR Manager", image: "https://randomuser.me/api/portraits/women/12.jpg" },
  { name: "John Doe", role: "CTO", image: "https://randomuser.me/api/portraits/men/13.jpg" },
  { name: "Sophia Wilson", role: "Finance Head", image: "https://randomuser.me/api/portraits/women/13.jpg" },
];

const TeamCarousel = () => {
  const [team, setTeam] = useState(teamData);

  useEffect(() => {
    const interval = setInterval(() => {
      setTeam((prev) => [...prev.slice(1), prev[0]]); // Shift first member to the end
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container my-5 ">
      <h2 className="text-center fw-bold text-dark mb-4">
        Our <span className="text-primary">Team</span>
      </h2>

      {/* Single Row with Four Columns */}
      <div className="overflow-hidden bg-light rounded shadow-lg p-4 bg-black ">
        <div className="d-flex transition-effect mr-16">
          {team.slice(0, 4).map((member, index) => (
            <div className="col-md-3 d-flex justify-content-center" key={index}>
              <div className="card text-center bg-white shadow-lg p-4" style={{ width: "280px", height: "240px" }}>
                <img src={member.image} className="rounded-circle mx-auto mb-3" alt={member.name} width="100" height="100" />
                <h5 className="text-primary">{member.name}</h5>
                <p className="text-muted">{member.role}</p>
                <div className="d-flex justify-content-center">
                  <i className="fab fa-facebook mx-2"></i>
                  <i className="fab fa-twitter mx-2"></i>
                  <i className="fab fa-linkedin mx-2"></i>
                  <i className="fab fa-instagram mx-2"></i>
                  <i className="fab fa-youtube mx-2"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .transition-effect {
            display: flex;
            gap: 20px;
            transition: transform 1s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default TeamCarousel;
