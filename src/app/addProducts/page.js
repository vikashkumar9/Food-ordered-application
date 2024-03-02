"use client";
import classes from "./addproduct.module.css";
import React, { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

const adduser = () => {
  const [name, setname] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const router = useRouter();
  const handleImageSelect = (event) => {
    setSelectedImage(event.target.files?.[0]);
    console.log(event.target.files[0].name);
  };

  const EmptyField = () => {
    setname("");
    setCategory("");
    setDescription("");
    setPrice("");
    router.push("/");
  };
  const handledata = async () => {
    const imagedata = new FormData();
    imagedata.set("file", selectedImage);
    const result = fetch("http://localhost:3000/api/uploadimage", {
      method: "POST",
      body: imagedata,
    });
    console.log(result);

    const data = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        description: description,
        price: price,
        category: category,
        image: selectedImage.name,
      }),
    });

    EmptyField();
  };

  return (
    <div className={classes.container}>
      <div className={classes.main_container}>
        <h2 className={classes.title}>Add Product</h2>
        <Input
          type="text"
          value={name}
          placeholder="Enter food name"
          onChange={(e) => setname(e.target.value)}
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
        <label htmlFor="image_uploads">Choose images to upload</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageSelect}
          className={classes.file_input}
        />
        <Button onClick={handledata} className={classes.btn}>
          Add
        </Button>
      </div>
    </div>
  );
};

export default adduser;
