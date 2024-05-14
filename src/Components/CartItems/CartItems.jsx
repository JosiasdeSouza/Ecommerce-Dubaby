import React, { useContext, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext'; // Adjust the path based on actual structure
import remove_icon from '../Assets/remove_icon.png';
import './CartItems.css';

const CartItems = () => {
    const { products, cartItems, removeFromCart, setCartItems } = useContext(ShopContext);
    
    // Early return conditions
    if (!products || !cartItems) {
        return <div>Loading...</div>;
    }
    if (!Object.keys(cartItems).length) {
        return <div className='cartitems'><p>Your cart is empty.</p></div>;
    }

    return (
        <div className='cartitems'>
            <div className='cartitems-format-main'>
                <p>Product</p> {/* Changed from 'Products' to 'Product' for singular clarity */}
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr/>
            {products.map((product) => {
                if (cartItems[product.id] > 0) {
                    const discountedPrice = product.discountPercentage ? 
                        (product.price * (1 - (product.discountPercentage / 100))).toFixed(2) : 
                        product.price.toFixed(2);

                    return (
                        <div key={product.id} className='cartitems-format'>
                            <img src={product.image} alt={product.title} className='carticon-product-icon' />
                            <p>{product.title}</p>
                            <p>${discountedPrice}</p>
                            <button className='cartitems-quantity'>{cartItems[product.id]}</button>
                            <p>${(discountedPrice * cartItems[product.id]).toFixed(2)}</p>
                            <img src={remove_icon} onClick={() => removeFromCart(product.id)} alt='Remove item' aria-label={`Remove ${product.title} from cart`} className="cartitems-remove-icon" />
                        </div>
                    );
                }
                return null;
            })}
            <div className='cartitems-down'>
            <div className='cartitems-total'>
                <h1>cart Totals</h1>
                <div>
                    <div className='cartitems-total-item'>
                        <p>Subtotal</p>
                        <p>${products.reduce((acc, product) => {
                            const discountedPrice = product.discountPercentage ? 
                                (product.price * (1 - (product.discountPercentage / 100))) : 
                                product.price;
                            return acc + (discountedPrice * cartItems[product.id]);
                        }, 0).toFixed(2)}</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                        <p>Shipping Fee</p>
                        <p>Free</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                        <h3>Total</h3>
                        <h3>${products.reduce((acc, product) => {
                            const discountedPrice = product.discountPercentage ? 
                                (product.price * (1 - (product.discountPercentage / 100))) : 
                                product.price;
                            return acc + (discountedPrice * cartItems[product.id]);
                        }, 0).toFixed(2)}</h3>
                        <button> PROCEED TO CHECKOUT</button>

                </div>
                </div>
                </div>
        </div>

        </div>
    );
};

export default CartItems;