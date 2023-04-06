import React from "react";
import "./Product.css";
const Product = (props) => {
  const { img, name, seller, quantity, price, ratings } = props.product;
  return (
    <div className="product relative">
      <img src={img} alt="product image" />
      <div className="product-description mb-16">
        <h6 className="text-xl">{name}</h6>
        <h5 className="mb-4 text-[#d48917] text-2xl mt-2">$ {price}</h5>

        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings} Stars</p>
      </div>
      <div className="cartBtn absolute bottom-0 w-[100%] px-[2%] mb-2">
        <button className="bg-[#FFE0B3] rounded p-2 w-[100%]">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
