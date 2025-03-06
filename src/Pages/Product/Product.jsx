import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../Data/Products';
import './Product.css'; // Import the CSS file

const Products = () => {
  return (
    <div className="products-container">
      <h1 className="title">Our Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} className="product-link">
            <div className="product-card">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <div className="product-details">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-price">Rs{product.price.toFixed(2)}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
