import { createRoot } from "react-dom/client";
import { useState, useEffect, Children } from "react";

import { fetchTenProducts } from "./utils/Apis/ProductsApi";

import AppContext from "./utils/Context/AppContext";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import ProductList from "./components/Products/ProductList";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getProductData();
  }, []);

  async function getProductData() {
    const data = await fetchTenProducts();
    console.log("🚀 ~ file: App.js:20 ~ getProductData ~ data:", data);
    setProducts(data);
  }

  return (
    <AppContext.Provider
      value={{
        products: products,
        setProducts: setProducts,
        cartItems: cartItems,
        setCartItems: setCartItems,
      }}
    >
      <NavBar />
      <Outlet />
    </AppContext.Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProductList />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={router}></RouterProvider>);
