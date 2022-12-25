import Link from "next/link";
import React from "react";

const FooterBanner = ({ heroBanner }) => {
  return (
    <div>
      <div className="hero-banner-container">
        <div>
          <p className="banner">The Book Nook Special</p>
          <h3>Get a 20%</h3>
          <h1>OFF</h1>
          <p className="banner">For this winter</p>
          <img
            src={heroBanner[11].image}
            alt=""
            className="hero-banner-image-2"
          />
          <img
            src={heroBanner[15].image}
            alt=""
            className="hero-banner-image-3"
          />
          <img
            src={heroBanner[12].image}
            alt=""
            className="hero-banner-image-4"
          />
          <img
            src={heroBanner[10].image}
            alt=""
            className="hero-banner-image-5"
          />
          <div>
            <Link href={`/product/${heroBanner.isbn13}`}>
              <button type="button" className="button-shop-now">
                Order Now
              </button>
            </Link>
            <div className="desc">
              <p>
                The person, be it gentleman or lady, who has not pleasure in a
                good novel, must be intolerably stupid.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
