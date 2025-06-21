// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import BodyComponent from "./components/BodyComponent";
import AboutComponent from "./components/AboutComponent";
import ContactComponent from "./components/ContactComponent";
import PagenotfoundComponent from "./components/PagenotfoundComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ResturantmenuComponent from "./components/ResturantmenuComponent";

// App layout component with outlet
const ApplayouComponent = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <Outlet />
      {/* <FooterComponent /> */}
    </div>
  );
};

// Router definition
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <ApplayouComponent />,
    errorElement: <PagenotfoundComponent />,
    children: [
      {
        path: "",
        element: <BodyComponent /> 
      },
      {
        path: "about",
        element: <AboutComponent />
      },
      {
        path: "contact",
        element: <ContactComponent />
      },
      {
          path: "restaurant/:id",
          element:<ResturantmenuComponent/>
      }
    ]
  }
]);

// Render app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
