import React from 'react';
import './AboutPage.css'; // Import custom CSS file for additional styling


const AboutPage = () => {
  return (
    <>
    <div style={{height:"90px"}}> </div>
    <section id="about" className="py-5">
        <div className="container contact">
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

        <section id="services" className="bg-dark py-3">
        <div className="container contact">
          <div className="row">
            <div className="col-lg-4 h-auto mb-4">
              <div className="card bg-no text-white text-center">
                <div className="card-body">
                  <img style={{height:"160px"}} src='https://www.restaurant-hospitality.com/sites/restaurant-hospitality.com/files/styles/article_featured_retina/public/uploads/2016/10/thinkstockphotos-504698004.jpg?itok=grnIQJ3d' alt=''/>
                  <h3 style={{color:"white"}} className="card-title"> Restro </h3>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, vero?</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card bg-no text-white text-center">
                <div className="card-body">
                <img style={{height:"160px"}} src='https://www.restaurant-hospitality.com/sites/restaurant-hospitality.com/files/styles/article_featured_retina/public/uploads/2016/10/thinkstockphotos-504698004.jpg?itok=grnIQJ3d' alt=''/>
                  <h3 style={{color:"white"}} className="card-title"> Pub </h3>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, vero?</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card bg-no text-white text-center">
                <div className="card-body">
                  <img style={{height:"160px"}} src='https://www.restaurant-hospitality.com/sites/restaurant-hospitality.com/files/styles/article_featured_retina/public/uploads/2016/10/thinkstockphotos-504698004.jpg?itok=grnIQJ3d' alt=''/>
                  <h3 style={{color:"white"}} className="card-title"> Bar </h3>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, vero?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="testimonials-section text-center">
        <div className="section-content">
          <h2>What Our Customers Say</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="testimonial">
                <img src='https://www.thepointdental.com.au/wp-content/uploads/2021/05/all-on-4-testimonials.jpg' alt="Testimonial 2" className="img-fluid box mb-5" />
                <p className="mb-0">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et felis sit amet nibh commodo laoreet vel nec ante."</p>
                <p className="text-muted">- John Doe, CEO of ABC Company</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial">
                <img src='https://www.thepointdental.com.au/wp-content/uploads/2021/05/all-on-4-testimonials.jpg' alt="Testimonial 2" className="img-fluid box mb-5" />
                <p className="mb-0">"Ut id turpis sit amet sapien luctus laoreet vel vel sapien. Fusce consequat diam vel sem volutpat, ut tempus ex rhoncus."</p>
                <p className="text-muted">- Jane Smith, Founder of XYZ Organization</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial">
                <img src='https://www.thepointdental.com.au/wp-content/uploads/2021/05/all-on-4-testimonials.jpg' alt="Testimonial 2" className="img-fluid box mb-5" />
                <p className="mb-0">"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam interdum pretium odio, vel tristique enim rutrum nec."</p>
                <p className="text-muted">- Michael Johnson, CTO of DEF Corporation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        
    </>
  );
};

export default AboutPage;
