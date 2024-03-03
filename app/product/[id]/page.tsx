"use client"
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Rating from "../../components/rating";
import "./index.css";
import { Tab, Tabs } from 'react-bootstrap';

type Props = {}

const ProductDetails = (props: Props) => {
  return (
    <div className='' role="main">
      <img
        className='image-breadcum'
        src={"/images/header/brds.png"}
        alt="Brand Logo"
        title="Brand Logo"
      />
      <div className='container mt-5' role="main">
        <div className='row'>
          <div className='col-md-6'>
            <div className='row'>
              <div className='col-md-2'>
                <img
                  src={"/images/brands/brand1.png"}
                  alt="Brand Logo"
                  title="Brand Logo"
                  className='small-images-procuct'
                />
                <img
                  src={"/images/brands/brand1.png"}
                  alt="Brand Logo"
                  title="Brand Logo"
                  className='small-images-procuct'
                />
                <img
                  src={"/images/brands/brand1.png"}
                  alt="Brand Logo"
                  title="Brand Logo"
                  className='small-images-procuct'
                />
                <img
                  src={"/images/brands/brand1.png"}
                  alt="Brand Logo"
                  title="Brand Logo"
                  className='small-images-procuct'
                />
              </div>
              <div className='col-md-4'>
                <img
                  src={"/images/products/productd1.png"}
                  alt="Chinese Cabbage"
                  title="Chinese Cabbage"
                />
              </div>

            </div>

          </div>
          <div className='col-md-6'>
            <div className='product-name-container'>
              <h1 className='h-36-600'>Chinese Cabbage</h1>
              <span className='body-14-400 in-stock-text'>In Stock</span>
            </div>

            <div className='review-stripe-container'>
              <Rating rating={4} /> <span>4 Reviews</span>
            </div>

            <div className='mt-24'>
              <span className='without-discount-price body-20-400'>$48.00</span>
              <span className='discount-price body-24-500 ms-2'>$17.28</span>
              <span className='discount-percent'>64% Off</span>
            </div>
            <hr />
            <div className='mt-24'>
              <div className='social-container-productdetails'>
                <div>
                  <span>Brand: </span>
                  <img
                    src={"/images/brands/brand1.png"}
                    alt="Brand Logo"
                    title="Brand Logo"
                  />
                </div>

                <div>
                  <span>share items: </span>
                  <a href="https://facebook.com" aria-label="Facebook"><img src={"/images/icon/social/facebook.png"} alt="Facebook" /></a>
                  <a href="https://twitter.com" aria-label="Twitter"><img src={"/images/icon/social/twitter.png"} alt="Twitter" /></a>
                  <a href="https://pinterest.com" aria-label="Pinterest"><img src={"/images/icon/social/pintrast.png"} alt="Pinterest" /></a>
                  <a href="https://instagram.com" aria-label="Instagram"><img src={"/images/icon/social/instagram.png"} alt="Instagram" /></a>
                </div>
              </div>
              <div>
                <p className='body-14-400 product-description'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. </p>
              </div>
            </div>
            <hr />

            <div className='add-cart-container'>
              <div className='quantity-counter'>
                <button>-</button>
                5
                <button>+</button>
              </div>


              <div>
                <button className='btn add-to-card-longbtn'>
                  Add to Cart
                  <img
                    src={"/images/products/AddToCart.png"}
                    alt="Brand Logo"
                    title="Brand Logo"
                  />
                </button>
              </div>

              <div >
                <img
                  className='add-to-wishlist-productdetail'
                  src={"/images/products/AddTowishlist.png"}
                  alt="Brand Logo"
                  title="Brand Logo"
                />
              </div>


            </div>

            <hr />

            <div>
              <span>Category: </span> <span className='body-14-400 product-description'>Vegetables</span>
            </div>
            <div>
              <span>Tag: </span> <span className='body-14-400 product-description'>Healthy Cabbage Vegetables</span>
            </div>
          </div>
        </div>



    <div className='tab-container'>
      <h6 className='tab-info'>Descriptions</h6>
      <h6 className='tab-info'>Additional Information</h6>
      <h6 className='tab-info'>Customer Feedback</h6>
    </div>
      </div>
    </div>
  );
};

export default ProductDetails;
