import React from 'react';

function Contact() {
  return (
    <>
      <div style={{ height: "200px" }}></div>
      <div className="app-container contact" style={{ backgroundColor: "black", color: "white" }}>

        <section id="contact" className="py-5">
          <div className="container contact">
            <div className="row">
              <div className="col-lg-16 mx-auto">
                <div className="text-center">
                  <h2>Contact Us</h2>
                  <p className="lead">Have a question, suggestion, or just want to say hi? We'd love to hear from you!</p>
                </div>
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows="5"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </section>


      </div>
    </>
  );
}

export default Contact;
