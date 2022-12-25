import React from "react";
import FooterBanner from "../components/FooterBanner";
import HeroBanner from "../components/HeroBanner";
import Products from "../components/Products";

const Home = ({ data }) => {
  const products = data.books;
  return (
    <>
      <HeroBanner heroBanner={products.length && products[0]} />
      <div className="products-heading">
        <h2>Best Selling Books</h2>
        <p>Books of many variations</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Products key={product.isbn13} product={product}></Products>
        ))}
      </div>
      <FooterBanner heroBanner={products.length && products} />
    </>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("https://api.itbook.store/1.0/new");
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Home;
