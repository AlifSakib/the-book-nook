import Link from "next/link";
import React from "react";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.title}</p>
        <h3>Best Deal</h3>
        <h1>Winter</h1>
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
