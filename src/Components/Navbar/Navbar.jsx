import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { ShopContext } from '../../Context/ShopContext'; // Import the ShopContext
import logo from '../Assets/logo.png';
import cart_icons from '../Assets/cart_icon.png';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { cartItems } = useContext(ShopContext); // Access cartItems from ShopContext
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Calculate the total number of items in the cart
  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);
  };

  // Function to handle menu click and scroll to top
  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top smoothly
  };

  // Function to navigate to home when clicking the logo
  const handleLogoClick = () => {
    navigate("/"); // Navigate to home page
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top smoothly
    setMenu("shop"); // Set active menu to 'shop'
  };

  return (
    <div className='navbar'>
      <div className="nav-logo" onClick={handleLogoClick} style={{ cursor: "pointer" }}>
        <img src={logo} alt="MAK Mart Logo" />
        <p>MAK Mart</p>
      </div>

      <ul className="nav-menu">
        <li onClick={() => handleMenuClick("shop")}>
          <Link style={{ textDecoration: 'none' }} to="/">Shop</Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => handleMenuClick("mens")}>
          <Link style={{ textDecoration: 'none' }} to="/mens">Men</Link>
          {menu === "mens" && <hr />}
        </li>
        <li onClick={() => handleMenuClick("womens")}>
          <Link style={{ textDecoration: 'none' }} to="/womens">Women</Link>
          {menu === "womens" && <hr />}
        </li>
        <li onClick={() => handleMenuClick("kids")}>
          <Link style={{ textDecoration: 'none' }} to="/kids">Kids</Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link style={{ textDecoration: 'none' }} to='/login'>
          <button>Login</button>
        </Link>
        <Link style={{ textDecoration: 'none' }} to='/cart'>
          <img src={cart_icons} alt="Cart Icon" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div> {/* Display total cart items */}
      </div>
    </div>
  );
};

export default Navbar;
