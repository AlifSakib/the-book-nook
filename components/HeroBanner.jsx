import Link from "next/link";
import React from "react";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="banner">{heroBanner.title}</p>
        <h3>Get a 50%</h3>
        <h1>Discount</h1>
        <p>{heroBanner.desc}</p>
        <img src={heroBanner.image} alt="" className="hero-banner-image" />
        <div>
          <Link href={`/product/${heroBanner.isbn13}`}>
            <button type="button">Shop Now</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner.subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
