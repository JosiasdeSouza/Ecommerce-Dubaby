import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
    const { products, addToCart } = useContext(ShopContext);
    const { ProductId } = useParams();

    if (!products) {
        return <div>Loading products...</div>;
    }

    const product = products.find(e => e.id === Number(ProductId));

    if (!product) {
        console.error("Product not found for ID:", ProductId);
        console.log("Available products:", products);
        return <div>Product not found</div>;
    }

    const handleAddToCart = () => {
        addToCart(product.id);
    };

    // Calculate the discounted price
    const discountedPrice = product.discountPercentage ? 
                            (product.price * (1 - (product.discountPercentage / 100))).toFixed(2) : 
                            product.price;

    return (
        <div>
            <Breadcrum product={product}/>
            <div className='product-container'>
                <ProductDisplay product={product}/>
                <div className='product-details'>
                    <div className='product-image'>
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div>
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                        <h2>Price: ${discountedPrice}</h2>
                        {product.discountPercentage && (
                            <p className="original-price">Original: ${product.price.toFixed(2)}</p>
                        )}
                        <button style={{ backgroundColor: '#d95ba4', color: '#64a4eb', padding: '10px', cursor: 'pointer', border: 'none' }}
                        onClick={handleAddToCart}>
                        ADD TO CART
                       </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;