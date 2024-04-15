'use client';
import React, { useEffect, useState } from 'react';
import classes from './foodproduct.module.css';
import MenuSearch from '@/components/MenuSearch/MenuSearch';
import ProductContainer from '@/components/products/ProductContainer';
import AutoPlay from '@/components/movingimages/AutoPlay';
import Link from 'next/link';

async function getdata() {
  const response = await fetch('/api/products');
  const data = await response.json();
  return data;
}
function ProductList() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const data = await getdata();
    setProducts(data.result);
    console.log('data', data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const filterDataHandler = (dataItems) => {
    const filteredData = products.filter((item) => {
      return item.name.toLowerCase().includes(dataItems.toLowerCase());
    });

    setProducts(filteredData);
  };

  return (
    <div>
      <div className={classes.menu_container}>
        <div className={classes.searchbar}>
          <MenuSearch addDatahandler={filterDataHandler} />
        </div>
        <AutoPlay data={products} />
        <div className={classes.grid_container}>
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
      </div>
    </div>
  );
}

export default ProductList;
