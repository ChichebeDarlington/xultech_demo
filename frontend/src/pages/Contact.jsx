import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Contact Us</h2>
          <p className="text-muted">We would love to hear from you</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="btn btn-primary px-5">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
