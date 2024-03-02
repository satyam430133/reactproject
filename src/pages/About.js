import React from 'react';
import './AboutPage.css'; // Import custom CSS file for additional styling


const AboutPage = () => {
  return (
    <>
    <div style={{height:"90px"}}> </div>
    <div className="about-wrapper">
      <div className="jumbotron jumbotron-fluid text-center">
        <div className="containerr">
          <h1 className="display-4">About Us</h1> <br/>
          <p className="lead">Welcome to our company's About page. Here you can learn more about who we are and what we do.</p>
        </div>
      </div>

      <div className="mission-section text-center">
        <div className="section-content">
          <h2>Our Mission</h2>
          <p>Our mission is to provide high-quality products and excellent customer service to our clients.</p>
        </div>
      </div>
      
      <div className="vision-section text-center">
        <div className="section-content">
          <h2>Our Vision</h2>
          <p>Our vision is to become the leading provider of innovative solutions in our industry, while maintaining our commitment to sustainability and social responsibility.</p>
        </div>
      </div>

      <div className="values-section text-center">
        <div className="section-content">
          <h2>Our Values</h2>
          <ul className="list-unstyled">
            <li><strong>Customer Focus:</strong> We prioritize our customers' needs and satisfaction above all else.</li>
            <li><strong>Innovation:</strong> We continuously seek new and better ways to serve our customers and improve our products.</li>
            <li><strong>Integrity:</strong> We conduct business with honesty, transparency, and respect for all stakeholders.</li>
            <li><strong>Teamwork:</strong> We foster a collaborative and inclusive work environment where every team member is valued and empowered.</li>
            <li><strong>Community:</strong> We are committed to giving back to the communities in which we operate and making a positive impact.</li>
          </ul>
        </div>
      </div>

     
    </div>
    </>
  );
};

export default AboutPage;
