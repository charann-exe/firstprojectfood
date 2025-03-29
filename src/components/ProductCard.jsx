import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={product.image_url || 'https://via.placeholder.com/150'}
        alt={product.product_name}
        className="product-image"
      />
      <h3 className="product-title">{product.product_name || 'No Name Available'}</h3>
      <p className="product-brand">{product.brands || 'Unknown Brand'}</p>
      <Link to={`/product/${product.code}`} className="view-details">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
