import { createContext } from "react";

const AppContext = createContext({
  products: [],
  cartItems: [],
});

export default AppContext;
