"use client";
import classes from "@/app/addProducts/addproduct.module.css";
import React, { useEffect, useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

const EditProduct = ({ params }) => {
  const [product, setProduct] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const router = useRouter();
  const id = params.editdata;

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/products/${id}`);
      const data = await response.json();
      if (response.ok) {
        setProduct(data.result);
        setName(data.result.name);
        setDescription(data.result.description);
        setPrice(data.result.price);
        setCategory(data.result.category);
      } else {
        console.error("Failed to fetch product data:", data.message);
      }
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpdate = async () => {
    try {
      const response = await fetch(`/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
          price,
          category,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Product updated successfully:", data.message);
        // Redirect to the product list page after updating
        router.push("/addProducts");
      } else {
        console.error("Failed to update product:", data.message);
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.main_container}>
        <h2 className={classes.title}>Edit Product</h2>
        <Input
          type="text"
          value={name}
          placeholder="Enter food name"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          value={description}
          placeholder="Enter description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          type="number"
          value={price}
          placeholder="Enter price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <Input
          type="text"
          value={category}
          placeholder="Enter category of your food"
          onChange={(e) => setCategory(e.target.value)}
        />
        <Button onClick={handleUpdate} className={classes.btn}>
          Update
        </Button>
      </div>
    </div>
  );
};

export default EditProduct;
