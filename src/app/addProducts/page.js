"use client";
import classes from "./addproduct.module.css";
import React, { useEffect, useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
const adduser = () => {
  const [name, setname] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [productsdata, setProductsData] = useState([]);
  const router = useRouter();
  const handleImageSelect = (event) => {
    setSelectedImage(event.target.files?.[0]);
    console.log(event.target.files[0].name);
  };
  const getdata = async () => {
    const productData = await fetch("/api/products");
    const results = await productData.json();
    setProductsData(results.result);
  };

  useEffect(() => {
    getdata();
  }, []);

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
    const result = fetch("/api/uploadimage", {
      method: "POST",
      body: imagedata,
    });
    console.log(result);

    const data = await fetch("/api/products", {
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
  const deletehandler = async (id) => {
    await fetch("/api/products/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
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

      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Descr</th>
            <th>Price</th>
            <th>Cate</th>
          </tr>
        </thead>
        <tbody>
          {productsdata.map((product) => (
            <tr key={product._id}>
              <td>
                <Image
                  src={"/" + product.image}
                  alt=""
                  height={40}
                  width={40}
                />
              </td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>
                <Link href={`/addProducts/${product._id}`}>
                  {" "}
                  <button>Edit</button>
                </Link>
              </td>
              <td>
                <button onClick={() => deletehandler(product._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default adduser;
