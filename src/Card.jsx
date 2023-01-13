const Card=(props)=>{
return(
    <>
        <div className="card" style={{width:'18rem'}}>
  <img className="card-img-top" src={props.imgsrc} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.text}</p>
    <a href={props.link} className="btn btn-danger">Go Youtube</a>
  </div>
</div>
    </>
)
}
export default Card;