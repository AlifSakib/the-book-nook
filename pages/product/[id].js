import React from "react";
import {
  AiFillStar,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
} from "react-icons/ai";
import Products from "../../components/Products";
import { useStateContext } from "../../context/StateContext";

const ProductDetails = ({ data, products }) => {
  const { decQty, incQty, qty, onAdd } = useStateContext();
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
              <span className="minus" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button
              type="button"
              className="add-to-cart"
              onClick={() => onAdd(data, qty)}
            >
              Add to Cart
            </button>
            <button type="button" className="buy-now">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.books.map((item) => (
              <Products key={item.isbn13} product={item} />
            ))}
          </div>
        </div>
      </div>
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

  const res2 = await fetch("https://api.itbook.store/1.0/new");
  const products = await res2.json();

  // Pass data to the page via props
  return { props: { data, products } };
}

export default ProductDetails;
