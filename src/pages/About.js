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
                  <h3 className="card-title"> Restro </h3>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, vero?</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card bg-no text-white text-center">
                <div className="card-body">
                <img style={{height:"160px"}} src='https://www.restaurant-hospitality.com/sites/restaurant-hospitality.com/files/styles/article_featured_retina/public/uploads/2016/10/thinkstockphotos-504698004.jpg?itok=grnIQJ3d' alt=''/>
                  <h3 className="card-title"> Pub </h3>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, vero?</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card bg-no text-white text-center">
                <div className="card-body">
                  <img style={{height:"160px"}} src='https://www.restaurant-hospitality.com/sites/restaurant-hospitality.com/files/styles/article_featured_retina/public/uploads/2016/10/thinkstockphotos-504698004.jpg?itok=grnIQJ3d' alt=''/>
                  <h3 className="card-title"> Bar </h3>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, vero?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        
    </>
  );
};

export default AboutPage;
