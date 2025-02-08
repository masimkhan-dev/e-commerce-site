import React, { createContext } from 'react';
import all_product from '../Components/Assets/all_product';  // Ensure correct import path

// Create the context for the shop
export const ShopContext = createContext(null);

// Helper function to get default cart state
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) { // Fixed loop condition
    cart[index] = 0; // Initialize the cart with zero quantity for each product
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = React.useState(getDefaultCart()); // Initialize cart with default items

  // Function to add item to cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  
  };

  // Function to remove item from cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // Context value to be provided to the rest of the app
  const contextValue = { all_product, cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
