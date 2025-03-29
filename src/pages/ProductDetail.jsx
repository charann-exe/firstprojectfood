import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
  const { barcode } = useParams();
  const [product, setProduct] = useState(null);

  const fetchProductDetail = async () => {
    const url = `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProduct(data.product);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    fetchProductDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [barcode]);

  if (!product) {
    return <div className="product-detail"><p>Loading product details...</p></div>;
  }

  return (
    <div className="product-detail">
      <Link to="/" className="back-link">← Back to Home</Link>
      <h2>{product.product_name}</h2>
      <div className="detail-container">
        <div className="image-section">
          {product.image_front_url ? (
            <img src={product.image_front_url} alt={product.product_name} />
          ) : (
            <div className="placeholder">No Image Available</div>
          )}
        </div>
        <div className="info-section">
          <h3>Ingredients</h3>
          <p>{product.ingredients_text || 'No ingredients available'}</p>
          <h3>Nutritional Information</h3>
          <ul>
            <li>Energy: {product.nutriments?.energy || 'N/A'}</li>
            <li>Fat: {product.nutriments?.fat || 'N/A'}</li>
            <li>Carbohydrates: {product.nutriments?.carbohydrates || 'N/A'}</li>
            <li>Proteins: {product.nutriments?.proteins || 'N/A'}</li>
          </ul>
          <h3>Labels</h3>
          <p>{product.labels || 'No labels available'}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
