import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductList from '../Components/ProductList';
import { Link, NavLink } from 'react-router-dom';
import './Products.css';

export default function App() {
  const [shop, setShop] = useState(null);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    console.log('app useeffect!!');
    let url = 'https://62be5b370bc9b1256155ad45.mockapi.io/huyndai';

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setShop(data);
      });

    console.log('app useeffect!!');
    let url_category = 'https://62be5b370bc9b1256155ad45.mockapi.io/model';

    fetch(url_category)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  var category_jsx = [];

  if (categories != null) {
    category_jsx = (
      <div class="container">
        <ul>
          {
            (category_jsx = categories.map((item) => (
              <li>
                <Link to={'category/' + item.model}>{item.model}</Link>
              </li>
            )))
          }
        </ul>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <div className="banner">
        <img src="https://www.dailyhyundai.org/files/banner-F3Gvps4gzK.jpg"></img>
        <ul>
          <li className="list-group-item">
            <Link to="/">Trang chủ</Link>
          </li>
          <li>
            <i class="fa-solid fa-angle-right"></i>
          </li>
          <li className="list-group-item">
            <Link to=""> Sản Phẩm</Link>
          </li>
        </ul>

        <div className="container banner-text">
          <div class="title">
            <h1 className="text-center">Sản Phẩm</h1>
            <h4 className="text-center">
              Tất cả sản phẩm của Huyndai Hoàng Cầu Việt Nam
            </h4>
          </div>
        </div>
      </div>

      {category_jsx}
      <div>
        <ProductList data={shop}></ProductList>
      </div>
    </div>
  );
}
