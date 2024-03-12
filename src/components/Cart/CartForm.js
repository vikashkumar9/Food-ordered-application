"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./cartform.module.css";
import Button from "../ui/Button";

const CartForm = ({ product, setProduct }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    product.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
  }, [product]);
  //   const deleteProduct = () => {
  //     const updatedProduct = product.filter((item) => item.quantity !== 0);
  //     setProduct(updatedProduct);
  //   };
  const decreaseQuantity = (id) => {
    const updatedProduct = product.map((item) => {
      if (item._id == id && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setProduct(updatedProduct);
  };

  const increaseQuantity = (id) => {
    const updatedProduct = product.map((item) => {
      if (item._id == id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setProduct(updatedProduct);
  };

  return (
    <>
      {product.map((item) => (
        <div key={item._id} className={styles.cartform_container}>
          <div className={styles.img_name}>
            <Image
              src={"/" + item.image}
              alt="cart_img"
              height={70}
              width={70}
              className={styles.cartItems_image}
            />
            <div className={styles.cartItems_name}>
              <h4>{item.name}</h4>
            </div>
          </div>

          <div className={styles.cartItems_price}>Rs {item.price}</div>

          <div className={styles.cartItems_quantity}>
            <Button
              className={styles.cartitem_button}
              onClick={() => decreaseQuantity(item._id)}
            >
              -
            </Button>
            <h5 className={styles.quantity}>{item.quantity}</h5>
            <Button
              className={styles.cartitem_button}
              onClick={() => increaseQuantity(item._id)}
            >
              +
            </Button>
          </div>

          <div className={styles.cartItems_total}>
            Rs {item.price * item.quantity}
          </div>
        </div>
      ))}
      {product.length > 0 ? (
        <div className={styles.total_container}>
          <div className={styles.total_fields}>
            <h5>Sub Total: </h5> <p> {totalPrice}Rs</p>
          </div>
          <div className={styles.total_fields}>
            <h5>Sales Tax: </h5> <p> 49Rs</p>
          </div>
          <hr></hr>
          <div className={styles.total_fields}>
            <h5>Total Price: </h5> <p> {totalPrice + 49}Rs</p>
          </div>
        </div>
      ) : (
        <h4>NO Data...</h4>
      )}
    </>
  );
};

export default CartForm;
