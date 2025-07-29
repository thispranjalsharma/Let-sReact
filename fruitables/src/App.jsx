import { createContext, useState } from "react";
import "./App.css";
import SubHeader from "./Components/SubHeader/SubHeader";
import Slider from "./Components/Silder/Slider";
import Featur from "./Components/Features/Feature";
import Feature from "./Components/Features/Feature";
import OrganicProduct from "./Components/Products/OrganicProducts/OrganicProduct";
import Footer from "./Components/Footer/Footer";
import BestsellerProduct from "./Components/Products/BestsellerProducts/BestsellerProduct";
import Testimonial from "./Components/Testimonial/Testimonial";
import FruiteCard from "./Components/Cards/FruiteCard/FruiteCard";
import { useEffect } from "react";
import { useReducer } from "react";
import axios from "axios";
import EndPoints from "./apis/EndPoints";
import { Route, Routes } from "react-router-dom";
import Shop from "./Components/Pages/Shop";
import Home from "./Components/Pages/Home";
import ShopDetails from "./Components/Pages/ShopDetails";
import SignUp from "./Components/Pages/SignUp";
import SignIn from "./Components/Pages/SignIn";
import BuyNow from "./Components/Pages/BuyNow";
import Auth from "./Components/auth/Auth";
import Profile from "./Components/Pages/Profile";

export const ProductContext = createContext();

function App() {
  return (
    <>
      {/* <div id="spinner" className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50  d-flex align-items-center justify-content-center">
            <div className="spinner-grow text-primary" role="status"></div>
        </div> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/shopDetails/:id" element={<ShopDetails />} />
        <Route
          path="/profile"
          element={
            <Auth>
              {" "}
              <Profile />{" "}
            </Auth>
          }
        />
        <Route
          path="/buyNow"
          element={
            <Auth>
              {" "}
              <BuyNow />{" "}
            </Auth>
          }
        />
      </Routes>
    </>
  );
}

export default App;
