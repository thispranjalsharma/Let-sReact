import React from "react";
import SubHeader from "../SubHeader/SubHeader";
import Footer from "../Footer/Footer";
import OrganicProduct from "../Products/OrganicProducts/OrganicProduct";
import BestsellerProduct from "../Products/BestsellerProducts/BestsellerProduct";

const Shop = () => {
  return (
    <>
      <SubHeader />
      {/* <OrganicProduct /> */}

      <BestsellerProduct />
      <Footer />
    </>
  );
};

export default Shop;
