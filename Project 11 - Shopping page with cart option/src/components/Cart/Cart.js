import { useContext } from "react";
import AppContext from "../../utils/Context/AppContext";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(AppContext);
  console.log("🚀 ~ file: Cart.js:6 ~ Cart ~ cartItems:", cartItems);

  const total = cartItems.reduce((acc, cur) => {
    const total = cur.price * cur.quantity;
    return (acc += total);
  }, 0);

  function handleIncreament(id) {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === id
        ? { ...cartItem, quantity: (cartItem.quantity += 1) }
        : { ...cartItem }
    );

    setCartItems(updatedCartItems);
  }

  function handleDecreament(id) {
    const updatedCartItems = cartItems
      .map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: (cartItem.quantity -= 1) }
          : { ...cartItem }
      )
      .filter((item) => item.quantity > 0);

    setCartItems(updatedCartItems);
  }

  return (
    <>
      <div className="container">
        <h1>Order Summary</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((cartItems, index) => (
              <tr>
                <td>{cartItems.title}</td>
                <td>
                  <span>
                    <button
                      onClick={() => {
                        handleIncreament(cartItems.id);
                      }}
                    >
                      +
                    </button>
                  </span>
                  {cartItems.quantity}
                  <span>
                    <button
                      onClick={() => {
                        handleDecreament(cartItems.id);
                      }}
                    >
                      -
                    </button>
                  </span>
                </td>
                <td>{cartItems.price}</td>
                <td>{(cartItems.price * cartItems.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3">Total</td>
              <td>{total.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default Cart;
