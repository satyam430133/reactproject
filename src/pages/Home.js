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
          <div className="menuoption">
            <div>
            <img src="https://images.pexels.com/photos/6062040/pexels-photo-6062040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <p> Restro </p>
            <button> <Link style={{color:"white",textDecoration:"none"}} to='/shop'> More </Link> </button>
            </div>
            <div>
            <img src="https://images.pexels.com/photos/3328312/pexels-photo-3328312.jpeg" />
            <p> Pub </p>
            <button> <a href="#" style={{color:"white",textDecoration:"none"}}> More </a> </button>
            </div>
            <div>
            <img src="https://images.pexels.com/photos/10548499/pexels-photo-10548499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <p> Bar </p>
            <button> <a href="#" style={{color:"white",textDecoration:"none"}}> More </a>  </button>
            </div>
          </div>

        </section>
        
      
        </>
    )
};
export default Home;