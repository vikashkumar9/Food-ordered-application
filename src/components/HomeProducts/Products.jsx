"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import ProductContainer from "../products/ProductContainer";
import styles from "./products.module.css";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/api/products");
        const data = await response.json();
        const results = data.result;
        const r = results.slice(0, 3);
        setProducts(r);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={styles.flex_menu}>
      {products.map((product) => (
        <div key={product._id}>
          <Link href={`/foodproducts/${product._id}`}>
            <ProductContainer
              name={product.name}
              description={product.description}
              price={product.price}
              category={product.category}
              imageName={product.image}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
