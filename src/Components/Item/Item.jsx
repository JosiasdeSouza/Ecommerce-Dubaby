import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    const { title, description, price, discountPercentage, stock, brand, category, image } = product;

    // Calculate the final price after discount
    const discountedPrice = (price - (price * discountPercentage / 100)).toFixed(2);

    return (
        <div className="item">
            <Link to={`/products/${product.id}`}>{product.name}
           <img src={image} alt={title} style={{ width: '100px', height: '100px' }} />
           </Link>
            <h2>{title}</h2>
            <p>{description}</p>
            <p><strong>Price:</strong> ${discountedPrice} <span style={{ textDecoration: 'line-through', color: 'grey' }}>${price}</span></p>
            <p><strong>Brand:</strong> {brand}</p>
            <p><strong>Category:</strong> {category}</p>
            <p><strong>Stock:</strong> {stock} {stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
            <p><strong>Rating:</strong> {product.rating} ⭐</p>
        </div>
    );
};

export default Item;