import React from 'react';

function Contact() {
  return (
    <>
    <div style={{height:"90px"}}></div>
    <div className="app-containercontact">
      <header className="bg-black text-white p-5">
        <div className="containercontact">
          <h1>Welcome to Our Website</h1>
          <p className="lead">We provide top-notch services to meet your needs.</p>
        </div>
      </header>

      <section id="services" className="bg-light py-5">
        <div className="containercontact">
          <div className="row">
            <div className="col-lg-4 h-auto mb-4">
              <div className="card bg-primary text-white text-center">
                <div className="card-body">
                  <img style={{height:"160px"}} src='https://www.restaurant-hospitality.com/sites/restaurant-hospitality.com/files/styles/article_featured_retina/public/uploads/2016/10/thinkstockphotos-504698004.jpg?itok=grnIQJ3d' alt=''/>
                  <h3 className="card-title">Service One</h3>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, vero?</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card bg-secondary text-white text-center">
                <div className="card-body">
                <img style={{height:"160px"}} src='https://www.restaurant-hospitality.com/sites/restaurant-hospitality.com/files/styles/article_featured_retina/public/uploads/2016/10/thinkstockphotos-504698004.jpg?itok=grnIQJ3d' alt=''/>
                  <h3 className="card-title">Service Two</h3>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, vero?</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card bg-primary text-white text-center">
                <div className="card-body">
                  <img style={{height:"160px"}} src='https://www.restaurant-hospitality.com/sites/restaurant-hospitality.com/files/styles/article_featured_retina/public/uploads/2016/10/thinkstockphotos-504698004.jpg?itok=grnIQJ3d' alt=''/>
                  <h3 className="card-title">Service Three</h3>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, vero?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-5">
        <div className="containercontact">
          <div className="row">
            <div className="col-lg-6">
              <h2>About Us</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, natus?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ullam.</p>
            </div>
            <div className="col-lg-6">
              <img src="https://pngimg.com/d/tom_and_jerry_PNG60.png" alt="About" className="img-fluid rounded-circle" />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-dark py-5">
        <div className="containercontact">
          <h2>Contact Us</h2>
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
              <textarea className="form-control" id="message" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </section>

      <footer className="bg-dark text-white text-center p-3">
        <div className="containercontact">
          <p>&copy; 2024 Your Company</p>
        </div>
      </footer>
    </div>
    </>
  );
}

export default Contact;
