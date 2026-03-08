import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-light py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="fw-bold">About Us</h2>
            <p className="text-muted">
              TechNova is a forward-thinking company focused on delivering
              innovative and efficient technology solutions to businesses
              worldwide. Our team combines creativity with technical expertise
              to produce outstanding results.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Team"
              className="img-fluid rounded shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
