import "./centimg.css"
const CenterImage=()=> {
  return (
    <>
    <div className="container">
      <div className="box">
        <div className="image">
          <img src="https://images.pexels.com/photos/2114365/pexels-photo-2114365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Placeholder" />
        </div>
        <div className="details">
          <h2> Party </h2>
          <p>Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="button"> Know More </button>
        </div>
      </div>
      <div className="box">
        <div className="image">
          <img src="https://images.pexels.com/photos/1845537/pexels-photo-1845537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Placeholder" />
        </div>
        <div className="details">
          <h2> Consert  </h2>
          <p>Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="button"> Know More </button>
        </div>
      </div>
    </div>   
    </>
  );
}

export default CenterImage;