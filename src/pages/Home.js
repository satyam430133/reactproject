import { Link } from "react-router-dom";
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
        {/* <Cards /> <br /> <br /> */}
        {/* <CenterImage /> */}

        <section>
  <div class="row">
    <div class="col-sm-4">
      <div class="menuoption">
        <img src="https://images.pexels.com/photos/6062040/pexels-photo-6062040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid" alt="Restro" />
        <h5>Restro </h5>
        <a href="/shop" class="btn btn-primary"> More </a>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="menuoption">
        <img src="https://images.pexels.com/photos/3328312/pexels-photo-3328312.jpeg" class="img-fluid" alt="Pub" />
        <h5>Pub </h5>
        <a href="/pubpage" class="btn btn-primary"> More </a>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="menuoption">
        <img src="https://images.pexels.com/photos/10548499/pexels-photo-10548499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid" alt="Bar" />
        <h5> Bar </h5>
        <a href="/barpage" class="btn btn-primary">More</a>
      </div>
    </div>
  </div>
</section>

        
      
        </>
    )
};
export default Home;