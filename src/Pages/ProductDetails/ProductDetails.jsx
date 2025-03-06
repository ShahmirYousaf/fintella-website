import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../Data/Products';
import { FaTruck, FaExchangeAlt, FaCheckCircle } from 'react-icons/fa';
import './ProductDetails.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

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
          <p className="product-price-Det">Rs{product.price.toFixed(2)}</p>
          <p className="product-description-Det">{product.description}</p>
          
          <div className="product-actions-Det">
            <div className="quantity-selector">
              <button className="quantity-btn" onClick={decreaseQuantity}>-</button>
              <span className="quantity-display">{quantity}</span>
              <button className="quantity-btn" onClick={increaseQuantity}>+</button>
            </div>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>

          <div className="product-policies-Det">
            <div className="policy-item">
              <FaExchangeAlt className="policy-icon" />
              <span>No Return Policy</span>
            </div>
            <div className="policy-item">
              <FaTruck className="policy-icon" />
              <span>Fully Insured</span>
            </div>
            <div className="policy-item">
              <FaCheckCircle className="policy-icon" />
              <span>All taxes and customer duties included</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
