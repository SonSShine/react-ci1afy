import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductList from '../Components/ProductList';

const Category = () => {
  const [shop, setShop] = useState(null);
  const [model_namme, setName] = useState(null);
  const params = useParams();
  useEffect(() => {
    console.log('user use effect!!');

    let url =
      'https://62be5b370bc9b1256155ad45.mockapi.io/huyndai?model' + params.name;

    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setShop(data);
        setName(params.name);
      });
  }, []);

  return (
    <div>
      <div className="container fluid">
        <h1>{model} Shop</h1>
        <p>Here We Go</p>
      </div>
      <div className="container ">
        <ProductList data={shop}></ProductList>
      </div>
    </div>
  );
};

export default Category;
