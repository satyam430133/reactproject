import Caraosal from "./Component/Caraosal";
import Cards from "./Component/Cards";
import CenterImage from "./Component/CenterImage"; 
import SearchProduct from "./Component/SearchResultsPage";

const Home=()=>{
    return(
        <>
        <div style={{height:"90px"}}> </div>
        <Caraosal />
        <CenterImage />
        <Cards /> <br /> <br />
        {/* <CenterImage /> */}
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
    )
};
export default Home;