const ItemCard = ({menuItem}) => {

  const {category,description,id,image,name,price} = menuItem
  return (
    <>
      <div className="card m-3" style={{ width: "18rem" }} key={id}>
        <img className="card-img-top" src={image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-title">Category : {category}</h6>
          <p className="card-text">
            {description}
          </p>
          <p>{price}</p>
          <a href="#" className="btn btn-primary">
            Order Now
          </a>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
