const Caraosal = () => {
  return (
    <>
      <div id="carouselExampleDark" className="carousel carousel-white slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img id="carausalimg" src="https://images.pexels.com/photos/6062040/pexels-photo-6062040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1 style={{ marginTop: "-240px" }}>Tom N Jerry Restro</h1>
              <h3>Where every bite tells a story, and every moment becomes a memory.</h3>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img id="carausalimg" src="https://images.pexels.com/photos/10548499/pexels-photo-10548499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1 style={{ marginTop: "-240px" }}>Tom N Jerry Bar</h1>
              <h3>Sip, socialize, and savor - where every glass holds a tale and every moment is steeped in conviviality.</h3>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img id="carausalimg" src="https://images.pexels.com/photos/3328312/pexels-photo-3328312.jpeg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1 style={{ marginTop: "-240px" }}>Tom N Jerry Pub</h1>
              <h3>Raise a glass to good times - where laughter echoes and memories are brewed.</h3>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> <br />
    </>
  );
}

export default Caraosal;
