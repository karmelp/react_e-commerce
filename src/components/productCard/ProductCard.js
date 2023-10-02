import React from 'react';
import './productCard.css'

const ProductCard = ({ product }) => {
  // Construct the image path using require
  const thumbnailSrc = require(`../../data/images/${product.thumbnail}`);

  return (
    <div className="product-card">
      <img className='image' src={thumbnailSrc} alt={product.name} />
      <div className='title'>{product.name}</div>
      <div className='price'>Rs. {product.price}</div>
    </div>
  );
};

export default ProductCard;
