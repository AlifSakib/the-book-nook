import Link from "next/link";
import React from "react";

const Products = ({ product: { title, image, price, isbn13: id, slug } }) => {
  return (
    <div>
      <Link href={`/product/${id}`}>
        <div className="">
          <img
            src={image && image}
            alt=""
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{title.slice(0, 20)}</p>
          <p className="product-price">{price}$</p>
        </div>
      </Link>
    </div>
  );
};

export default Products;
