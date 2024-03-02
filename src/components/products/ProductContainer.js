// ProductContainer.js
"use client";
import React from "react";
import classes from "./productContainer.module.css";
import Image from "next/image";

import Button from "@/components/ui/Button";
const ProductContainer = ({
  name,
  description,
  price,
  category,
  imageName,
}) => {
  return (
    <div className={classes.product_container}>
      <div>
        <Image
          src={"/" + imageName}
          alt={name}
          width={200}
          height={200}
          className={classes.product_image}
        />
      </div>
      <div className={classes.name_price}>
        <div>
          <h4>{name}</h4>
        </div>
        <div>
          <span className={classes.price}>Rs </span>
          {price}
        </div>
      </div>
      <div className={classes.food_description}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductContainer;
