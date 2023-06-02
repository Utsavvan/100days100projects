import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import store from "./utils/ReduxStore/store";
import { Provider } from "react-redux";

// ------- Page imports --------//

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Recent from "./components/Recent/Recent";
import TopRated from "./components/TopRated/TopRated";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
      </Provider>
    </>
  );
};

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/recently-added",
        element: <Recent />,
      },
      {
        path: "/top-rated",
        element: <TopRated />,
      },
    ],
  },
]);

const container = document.getElementById("root");

const root = createRoot(container);

root.render(<RouterProvider router={Router} />);
