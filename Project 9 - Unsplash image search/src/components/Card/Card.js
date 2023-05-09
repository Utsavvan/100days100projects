const Card = ({image}) => {
  return (
    <>
      <div className="card" style={{"width": "18rem"}}>
        <img className="card-img-top" style={{"maxWidth": "300px"}} src={`${image}`} alt="Card image cap" />
      </div>
    </>
  );
};

export default Card;