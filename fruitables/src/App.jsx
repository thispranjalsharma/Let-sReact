import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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

function App() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      if (action.type === "productList") {
        state.productList = action.payload;
      }
      return { ...state };
    },
    {
      productList: [],
    }
  );

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    const responsive = await axios.get(EndPoints.PRODUCT_LIST);
    console.log(responsive);
    dispatch({ type: "productList", payload: responsive.data.productList });
  };

  return (
    <>
      {/* <div id="spinner" className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50  d-flex align-items-center justify-content-center">
            <div className="spinner-grow text-primary" role="status"></div>
        </div> */}

      <SubHeader />

      <Slider />

      <Feature />

      <OrganicProduct />

      <FruiteCard />

      <BestsellerProduct />

      <Testimonial />

      <Footer />
    </>
  );
}

export default App;
