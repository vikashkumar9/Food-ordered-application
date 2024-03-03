"use client";
import { useState, useEffect, useContext } from "react";
import styles from "./singleproductpage.module.css";
import Button from "@/components/ui/Button";

import { useRouter } from "next/navigation";
import { Context } from "@/components/Cartcontext/UserContext";

const Page = ({ params }) => {
  const router = useRouter();

  const { products, setProducts } = useContext(Context);
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(
        `http://localhost:3000/api/products/${params.slug}`
      );

      const data = await response.json();
      setProductData(data.result);
    };

    getProduct();
  }, [params.slug]);

  useEffect(() => {
    console.log("products => ", products);
  }, [products]);

  const addItem = (productData) => {
    let flag = products.filter((i) => i._id === productData._id);
    if (flag.length > 0) {
      products.map((item) => {
        if (item._id === productData._id) {
          item.quantity++;
        }
      });
    } else
      setProducts((pre) => {
        return [...pre, productData];
      });
    router.push("/cart");
  };

  return (
    <div className={styles.singlepage_container}>
      {productData ? (
        <>
          <img src={"/" + productData.image} className={styles.image} />
          <div className={styles.aboutproduct}>
            <div className={styles.name}>{productData.name}</div>
            <div className={styles.description}>{productData.description}</div>
            <div className={styles.rupees}>
              <span className={styles.rs_text}>RS - </span>
              {productData.price}.
            </div>
            <div>
              <Button
                onClick={() => addItem(productData)}
                className={styles.addto_cart}
              >
                Add Cart
              </Button>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Page;
