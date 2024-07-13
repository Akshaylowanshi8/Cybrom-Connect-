import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../Dashboard.assets/css/AllTech.css";

const DisplayTech = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/dashboard/alltech');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className='AllTech-main-div'>
      <h1>All Technologies</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product._id} className="product-item">
            <h2>{product.Tname}</h2>
            <p>{product.Tdescription}</p>
            <p>Price: ${product.Tprice}</p>
            <p>Apply Date: {new Date(product.aplyDate).toLocaleDateString()}</p>
            {product.imageUrls && product.imageUrls.map((url, index) => (
              <img key={index} src={url} alt={`${product.Tname} ${index + 1}`} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayTech;
