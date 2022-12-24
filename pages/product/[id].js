import React from "react";
import {
  AiFillStar,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
} from "react-icons/ai";
const ProductDetails = ({ data }) => {
  const { title, image, price, desc, authors, rating } = data;
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={image} className="product-detail-image" />
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{title}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>{rating}</p>
          </div>
          <h4>Details: </h4>
          <p>{desc}</p>
          <p className="price">${price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus">
                <AiOutlineMinus />
              </span>
              <span className="num">0</span>
              <span className="plus">
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button
              type="button"
              className="add-to-cart"
              onClick={() => onAdd(product, qty)}
            >
              Add to Cart
            </button>
            <button type="button" className="buy-now">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

// export async function getStaticPaths() {
//   const res = await fetch("https://api.itbook.store/1.0/new");
//   const products = await res.json();

//   const paths = products.books.map((product) => ({
//     params: { id: product.isbn13.toString() },
//   }));

//   return { paths, fallback: false };
// }

export async function getServerSideProps({ params }) {
  // Fetch data from external API
  const res = await fetch(`https://api.itbook.store/1.0/books/${params.id}`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default ProductDetails;
