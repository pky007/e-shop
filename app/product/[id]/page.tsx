import React from 'react'
import Rating from "../../components/rating"
import "./index.css"

type Props = {}

const ProductDetails = (props: Props) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>

        </div>
        <div className='col-md-6'>
          <div className='product-name-container'>
          <h4 className='h-36-600'>Chinese Cabbage</h4>
          <span className='body-14-400 in-stock-text'>In Stock</span>
          </div>

          <div className='review-stripe-container'>
             <Rating rating={4}/> <span>4 Reviews</span>
          </div>


        </div>
      </div>
    </div>
  )
}

export default ProductDetails