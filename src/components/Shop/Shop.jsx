import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="shop-container grid grid-cols-5 gap-10 mt-10 px-[10%]">
      <div className="products-container col-span-4 grid grid-cols-1 md:grid-cols-3  gap-[15px]">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
      <div className="cart-container">
        <h4>order summary</h4>
      </div>
    </div>
  );
};

export default Shop;
