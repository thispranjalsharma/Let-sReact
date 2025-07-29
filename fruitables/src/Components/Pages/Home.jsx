import React, { useEffect, useReducer } from "react";
import { ProductContext } from "../../App";
import SubHeader from "../SubHeader/SubHeader";
import Slider from "../Silder/Slider";
import Feature from "../Features/Feature";
import OrganicProduct from "../Products/OrganicProducts/OrganicProduct";
import FruiteCard from "../Cards/FruiteCard/FruiteCard";
import BestsellerProduct from "../Products/BestsellerProducts/BestsellerProduct";
import Testimonial from "../Testimonial/Testimonial";
import Footer from "../Footer/Footer";
import axios from "axios";
import EndPoints from "../../apis/EndPoints";

const Home = () => {
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
    // console.log(responsive);
    dispatch({ type: "productList", payload: responsive.data.productList });
  };
  return (
    <>
      <ProductContext value={{ productList: state.productList }}>
        <SubHeader />

        <Slider />

        <Feature />

        <OrganicProduct />

        <FruiteCard />

        <BestsellerProduct />

        <Testimonial />

        <Footer />
      </ProductContext>
    </>
  );
};

export default Home;
