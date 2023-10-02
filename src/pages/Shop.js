import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/productCard/ProductCard.js';
import Pagination from '../components/pagination/Pagination.js';
import Hero from '../components/hero/Hero.js';
import data from '../data/products.js';

const productsPerPage = 16;

function Shop() {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = data?.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data?.length / productsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const breadcrumbs = [
    { text: 'Home', link: '/' },
    { text: 'Shop', link: '/shop' },
  ];

  return (
    <div className="shop-page">
      <Hero
        pageTitle="Shop"
        breadcrumbs={breadcrumbs}
      />

      <div className="product-grid">
        {currentProducts?.map((product) => (
          <Link key={product.id} to={`/shop/${encodeURIComponent(product.name)}`}>
            {/* Make the ProductCard a Link */}
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Shop;
