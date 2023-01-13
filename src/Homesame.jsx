const Homesame = (names) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>{names.names}
            <br />
            <span className="text-success">Syed Technical</span>
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae porro tempore modi, repellat alias ipsam laboriosam dolor ab harum illum sequi architecto nesciunt ducimus odit. Maxime quibusdam voluptatem illum voluptate.
        </p>
        <br />
        <button type="button" class="btn btn-outline-primary">Primary</button>
          </div>
          <div className="col-md-6">
            <img src={names.images} alt="no images" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Homesame;
