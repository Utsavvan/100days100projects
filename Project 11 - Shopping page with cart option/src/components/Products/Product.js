import { useContext } from "react";
import AppContext from "../../utils/Context/AppContext";

import "./Products.css";

const Product = ({ products }) => {
  const { id, title, price, description, image } = products;

  const { cartItems, setCartItems } = useContext(AppContext);

  function addToCartHandler() {
    const indexOfObject = cartItems.findIndex((cartItem) => cartItem.id === id);

    if (indexOfObject === -1) {
      setCartItems((cartItems) => [
        ...cartItems,
        {
          id,
          title,
          price,
          quantity: 1,
        },
      ]);
    } else {
      const newItems = [...cartItems];
      newItems[indexOfObject].quantity += 1;
      setCartItems(newItems);
    }
  }

  return (
    <div className="col-md-4">
      <div className="card " key={id}>
        <img src={image} className="card-img-top m-auto" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p>{price}</p>
          <button onClick={addToCartHandler} className="btn btn-primary">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
