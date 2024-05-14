import React, { useContext } from 'react';
import Hero from '../Components/Hero/Hero';
import { ShopContext } from '../Context/ShopContext';

const Shop = () => {
    const { products } = useContext(ShopContext);

    // Now you can use `products` in your component

    return (
        <div>
            <Hero/>
            {/* Render your products here */}
        </div>
    );
};

export default Shop;