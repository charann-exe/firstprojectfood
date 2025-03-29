import React from 'react';
import './ProductList.css';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        products.map((product) => (
          <div key={product.code} className="product-card">
            <img src={product.image_url} alt={product.product_name} />
            <h3>{product.product_name}</h3>
            <p><strong>Brand:</strong> {product.brands}</p>
            <p><strong>Nutrition Grade:</strong> {product.nutrition_grade}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
