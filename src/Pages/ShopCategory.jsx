import React, { useContext } from "react";
import { ShopContext } from '../Context/ShopContext';
import Item from "../Components/Item/Item";



const ShopCategory = ({ category }) => {
    const { products } = useContext(ShopContext); 

    const filteredProducts = products.filter(product => product.category === category);

    return (
        <div className="shop-category">
            {filteredProducts.map(product => (
                <Item key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ShopCategory;
