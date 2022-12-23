import React from "react";
import FooterBanner from "../components/FooterBanner";

const Home = () => {
  return (
    <>
      HeroBanner
      <div className="products-heading">
        <h2>Best Selling Books</h2>
        <p>Books of many variations</p>
      </div>
      <div className="products-container">
        {["product 1", "product 2"].map((product) => product)}
      </div>
      Footer
      <FooterBanner></FooterBanner>
    </>
  );
};

export default Home;
