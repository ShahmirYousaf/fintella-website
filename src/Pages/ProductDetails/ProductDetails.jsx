import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../Data/Products';
import './ProductDetails.css';

const ProductDetail = () => {
  const { id } = useParams();
  console.log("Hello")
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="product-detail-container-Det">
      <div className="product-detail-Det">
        <div className="product-image-container-Det">
          <img src={product.image} alt={product.title} className="product-detail-image" />
        </div>
        <div className="product-info-Det">
          <h1 className="product-title-Det">{product.title}</h1>
          <p className="product-price-Det">${product.price.toFixed(2)}</p>
          <p className="product-descriptionv">{product.description}</p>
          <div className="product-actions-Det">
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
