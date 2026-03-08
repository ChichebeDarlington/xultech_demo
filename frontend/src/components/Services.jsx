import React from "react";

const Services = () => {
  return (
    <section id="services" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Services</h2>
          <p className="text-muted">What we offer to our clients</p>
        </div>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">Web Development</h5>
                <p className="card-text text-muted">
                  Responsive and scalable web applications tailored to your
                  needs.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">Mobile Apps</h5>
                <p className="card-text text-muted">
                  High-performance mobile applications for Android and iOS.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">Cloud Solutions</h5>
                <p className="card-text text-muted">
                  Secure cloud infrastructure and DevOps implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
