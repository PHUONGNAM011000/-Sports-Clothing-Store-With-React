import Product1 from '../assets/images/product-1.jpg';
import Product2 from '../assets/images/product-2.jpg';
import Product3 from '../assets/images/product-3.jpg';
import Product4 from '../assets/images/product-4.jpg';
import Product5 from '../assets/images/product-5.jpg';
import Product6 from '../assets/images/product-6.jpg';
import Product7 from '../assets/images/product-7.jpg';
import Product8 from '../assets/images/product-8.jpg';
import Product9 from '../assets/images/product-9.jpg';
import Product10 from '../assets/images/product-10.jpg';
import Product11 from '../assets/images/product-11.jpg';
import Product12 from '../assets/images/product-12.jpg';
// import React, { useState } from 'react';
import NavBar from './common/NavBar';
import Footer from './common/Footer';

const ShowProduct = () => {
  const product = [
    {
      id: 1,
      image: Product1,
      name: 'CRUCIATE TEE',
      price: '250.000',
    },
    {
      id: 2,
      image: Product2,
      name: 'CRUCIATE TEE',
      price: '250.000',
    },
    {
      id: 3,
      image: Product3,
      name: 'CRUCIATE TEE',
      price: '250.000',
    },
    {
      id: 4,
      image: Product4,
      name: 'CRUCIATE TEE',
      price: '250.000',
    },
    {
      id: 5,
      image: Product5,
      name: 'CRUCIATE TEE',
      price: '250.000',
    },
    {
      id: 6,
      image: Product6,
      name: 'CRUCIATE TEE',
      price: '250.000',
    },
    {
      id: 7,
      image: Product7,
      name: 'CRUCIATE TEE',
      price: '250.000',
    },
    {
      id: 8,
      image: Product8,
      name: 'CRUCIATE TEE',
      price: '250.000',
    },
    {
      id: 9,
      image: Product9,
      name: 'CRUCIATE TEE',
      price: '250.000',
    },
    {
      id: 10,
      image: Product10,
      name: 'CRUCIATE TEE',
      price: '250.000',
    },
    {
      id: 11,
      image: Product11,
      name: 'CRUCIATE TEE',
      price: '250.000',
    },
    {
      id: 12,
      image: Product12,
      name: 'CRUCIATE TEE',
      price: '250.000',
    },
  ];

  return (
    <>
      <NavBar />

      {/* product */}
      <div id="product">
        <div className="small-container">
          <div className="row row-2">
            <h2>All Products</h2>
            <div class="select">
              <select>
                <option selected disabled>
                  Default Shorting
                </option>
                <option>Short by rice</option>
                <option>Short by popularity</option>
                <option>Short by rating</option>
                <option>Short by sale</option>
              </select>
            </div>
          </div>
          <div className="row">
            {product.map((product) => (
              <div className="col-4 hover" key={product.id}>
                <img src={product.image} alt="" />
                <h4>{product.name}</h4>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-o"></i>
                </div>
                <p>{product.price}&nbsp;VNĐ</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ShowProduct;
