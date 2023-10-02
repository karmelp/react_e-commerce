import React, { useState } from 'react';
import './productGallery.css';

const ProductGallery = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="product-gallery">
      <div className="thumbnail-container">
        <div className="thumbnails">
          {images.map((image, index) => (
            <div
              key={index}
              className={`thumbnail ${currentImageIndex === index ? 'active' : ''}`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img src={require(`../../data/images/${image}`)} alt={`Product ${index}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="main-image">
        <img src={require(`../../data/images/${images[currentImageIndex]}`)} alt={`Product ${currentImageIndex}`} />
      </div>
    </div>
  );
};

export default ProductGallery;
