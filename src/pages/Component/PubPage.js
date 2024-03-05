import React from 'react';
import { Card, Button } from 'react-bootstrap';

const PubPage = () => {
  return (
   <>
   <div style={{height:"120px"}}></div>
   <div className="pubcontainer" style={{textAlign:"center"}}>
      <h1>Welcome to Our Pub!</h1>
      <p>Here you'll find information about our pub and some of our offerings:</p>

      <div className="row" style={{marginTop:"60px"}}>
        <div className="col-md-4 mb-4">
          <Card>
            <Card.Img variant="top" src="https://images.pexels.com/photos/4279096/pexels-photo-4279096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Card.Body>
              <Card.Title>Beer</Card.Title>
              <Card.Text>
                We offer a wide selection of craft beers.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 mb-4">
          <Card>
            <Card.Img variant="top" src="https://images.pexels.com/photos/4279096/pexels-photo-4279096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Card.Body>
              <Card.Title>Cocktails</Card.Title>
              <Card.Text>
                Enjoy our signature cocktails crafted by expert mixologists.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 mb-4">
          <Card>
            <Card.Img variant="top" src="https://images.pexels.com/photos/4279096/pexels-photo-4279096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Card.Body>
              <Card.Title>Live Music</Card.Title>
              <Card.Text>
                Join us for live music performances every weekend.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
   </>
  );
};

export default PubPage;
