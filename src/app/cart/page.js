"use client";
import CartForm from "@/components/Cart/CartForm";
import { useContext } from "react";
import { Context } from "@/components/Cartcontext/UserContext";
import styles from "./cart.module.css";
const Cart = () => {
  const { products, setProducts } = useContext(Context);

  return (
    <div className={styles.cart_container}>
      <div>
        <CartForm product={products} setProduct={setProducts} />
      </div>
    </div>
  );
};

export default Cart;
