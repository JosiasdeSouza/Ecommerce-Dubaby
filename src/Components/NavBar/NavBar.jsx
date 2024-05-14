import React, { useState } from "react"; // Import useState hook
import "./NavBar.css";


// Update these import paths according to the new assets location
import logo from "../Assets/dubabylogo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

const NavBar = () => {
    // Correct the useState initialization
    const [menu, setMenu] = useState("shop");

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="Dubaby logo" />
                <p>DUBABY</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => setMenu("shop")}><Link to='/'>Shop</Link>{menu === "shop" ? <hr/> : null}</li>
                <li onClick={() => setMenu("clothes")}><Link to='/clothes'>Clothes</Link>{menu === "clothes" ? <hr/> : null}</li>
                <li onClick={() => setMenu("toys")}><Link to='/toys'>Toys</Link>{menu === "toys" ? <hr/> : null}</li>
                <li onClick={() => setMenu("jewelry")}><Link to='/jewelry'>Jewelry</Link>{menu === "jewelry" ? <hr/> : null}</li>
                <li onClick={() => setMenu("electronics")}><Link to='/electronics'>Electronics</Link>{menu === "electronics" ? <hr/> : null}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="Shopping cart icon" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
}

export default NavBar;
