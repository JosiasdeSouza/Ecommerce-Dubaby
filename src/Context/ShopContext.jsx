import React, { createContext, useState, useEffect } from 'react';
import productsData from '../Components/Assets/products.js';

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    const [products, setProducts] = useState(productsData); // Initialize with product data
    const [cartItems, setCartItems] = useState({}); // Corrected from 'cart' to 'cartItems'

    // Ensure cartItems is initialized only once products are loaded
    useEffect(() => {
        if (products.length > 0 && Object.keys(cartItems).length === 0) {
            const initialCart = {};
            products.forEach(product => {
                initialCart[product.id] = 0; // Initialize to zero
            });
            setCartItems(initialCart);
        }
    }, [products]); // Dependency on products ensures it runs when products are set

    // Function to add to cart
    const addToCart = (itemId) => {
        setCartItems(prev => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1 // Ensure item exists or initialize with 0 before adding
        }));
    };

    // Function to remove from cart
    const removeFromCart = (itemId) => {
        setCartItems(prev => {
            const newCart = { ...prev };
            if (newCart[itemId] > 0) {
                newCart[itemId] -= 1;
            }
            return newCart;
        });
    };

    // Context value that will be provided to the children
    const contextValue = {
        products,
        setProducts,
        cartItems, // Adjusted to reflect the correct state variable name
        setCartItems,
        addToCart,
        removeFromCart,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopProvider;
