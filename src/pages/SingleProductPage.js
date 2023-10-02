import React from 'react';
import { useParams } from 'react-router-dom';
import SingleProduct from '../components/singleProduct/SingleProduct';
import data from '../data/products.js';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';

const SingleProductPage = () => {
  const { productTitle } = useParams();

  // Use decodeURIComponent to decode the URL parameter
  const decodedProductTitle = decodeURIComponent(productTitle);

  // Find the product by its name
  const product = data.find((item) => item.name === decodedProductTitle);

  if (!product) {
    return <div>Product not found.</div>;
  }

  const breadcrumbs = [
    { text: 'Home', link: '/' },
    { text: 'Shop', link: '/shop' },
    { text: product.name, link: `/shop/${encodeURIComponent(product.name)}` },
  ];

  return (
    <div className="single-product-page">
      <Breadcrumbs items={breadcrumbs} />
      <SingleProduct product={product} />
    </div>
  );
};

export default SingleProductPage;
