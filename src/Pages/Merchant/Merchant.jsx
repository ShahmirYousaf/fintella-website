import React from 'react';
import { Link } from 'react-router-dom';
import { merchants } from '../../Data/Merchant';
import './Merchant.css';

const Merchant = () => {
  return (
    <div className="merchant-container">
      <h1 className="merchant-page-title">Our Sub Merchants</h1>
      <div className="merchant-grid">
        {merchants.map((merchant) => (
          <div key={merchant.id} className="merchant-card">
            <img
              src={merchant.image}
              alt={merchant.name}
              className="merchant-image"
            />
            <div className="merchant-details">
              <h3 className="merchant-title">{merchant.name}</h3>
              <p className="merchant-description">{merchant.description}</p>
              <Link to={merchant.link} className="merchant-link">
                Visit Now <span className="merchant-link-icon">↗</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Merchant;