import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import ProductPage from './components/ProductPage/ProductPage';
import Cart from './components/Cart/Cart';
import Wishlist from './components/Wishlist/Wishlist'
import UserProfile from './components/UserProfile/UserProfile';
import ProductDetails from './components/ProductDetails/ProductDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "/productPage",
        element: <ProductPage />
      },
      {
        path: "/productPage/:asin",
        element: <ProductDetails />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/wishlist",
        element: <Wishlist />
      },
      {
        path: "/userProfile",
        element: <UserProfile />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  //   <RouterProvider router={router} />
  // </React.StrictMode>
  <>
    <RouterProvider router={router} />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
