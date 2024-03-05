import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

const BarPage = () => {

    const events = [
        { name: 'Live Music Fridays', image: 'https://via.placeholder.com/150' },
        { name: 'Trivia Night Tuesdays', image: 'https://via.placeholder.com/150' },
        { name: 'Karaoke Wednesdays', image: 'https://via.placeholder.com/150' },
        { name: 'Themed Parties', image: 'https://via.placeholder.com/150' },
        { name: 'Beer Tasting Events', image: 'https://via.placeholder.com/150' },
        { name: 'Sunday Brunch', image: 'https://via.placeholder.com/150' }
      ];


  return (
    <>
    <div style={{height:"110px"}} ></div>
    <div className="barcontainer">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h1>Discover Our Bar</h1>
        </div>
      </div>
        <div style={{height:"40px"}}> </div>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1601775/pexels-photo-1601775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/3319726/pexels-photo-3319726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/2728555/pexels-photo-2728555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

      <div className="row mt-5">
        <div className="col-md-4 mb-4">
          <Card>
            <Card.Img variant="top" src="https://images.pexels.com/photos/736188/pexels-photo-736188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Card.Body>
              <Card.Title>Wine</Card.Title>
              <Card.Text>
                Explore our extensive collection of fine wines from around the world. Whether you're a connoisseur or just starting to explore the world of wine, we have something for everyone.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 mb-4">
          <Card>
            <Card.Img variant="top" src="https://images.pexels.com/photos/736188/pexels-photo-736188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Card.Body>
              <Card.Title>Spirits</Card.Title>
              <Card.Text>
                Indulge in premium spirits and cocktails crafted by our skilled bartenders. From classic cocktails to innovative creations, our bar offers an unparalleled drinking experience.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 mb-4">
          <Card>
            <Card.Img variant="top" src="https://images.pexels.com/photos/736188/pexels-photo-736188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Card.Body>
              <Card.Title>Happy Hour</Card.Title>
              <Card.Text>
                Join us for our daily happy hour specials on select drinks. Enjoy discounted prices on beer, wine, and cocktails, along with special deals on appetizers.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </div>
      </div>

       {/* <div className="row mt-5">
        {events.map((event, index) => (
          <div key={index} className="col-md-4 mb-4">
            <Card>
              <Card.Img variant="top" src={event.image} />
              <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div> */}

      <div className="row mt-5">
        <div className="col-md-12">
          <h4 style={{fontFamily:"sans-serif"}}> For reservations or inquiries, please <Link to="/contact">Contact us</Link>. </h4>
        </div>
      </div>
    </div>
    </>
  );
};

export default BarPage;
