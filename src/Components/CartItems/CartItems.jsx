import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

  // Calculate total cart price
  const cartTotalPrice = Object.entries(cartItems).reduce((acc, [itemId, quantity]) => {
    const product = all_product.find((p) => p.id === parseInt(itemId)); // Ensure we find the correct product by id
    if (product && quantity > 0) {
      return acc + (product.new_price * quantity);
    }
    return acc;
  }, 0);

  return (
    <div className="cart-items"> {/* Use a more descriptive class name */}
      <div className="cart-items-format-main">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Action</p>
        <p>Total</p>
      </div>
      <hr />
      {Object.entries(cartItems).length > 0 ? (
        Object.entries(cartItems).map(([itemId, quantity]) => {
          if (quantity > 0) {
            const product = all_product.find((e) => e.id === parseInt(itemId)); // Find product based on itemId
            if (product) {
              return (
                <div key={product.id} className="cart-item"> {/* Use a more descriptive class name */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="cart-item-product-icon"
                  />
                  <div className="cart-item-details">
                    <p>{product.name}</p>
                    <p>${product.new_price}</p>
                    <button className="cart-item-quantity">{quantity}</button>
                    <p>${product.new_price * quantity}</p>
                  </div>
                  <img
                    src={remove_icon}
                    alt="remove"
                    onClick={() => removeFromCart(product.id)}
                    className="cart-item-remove-icon"
                  />
                </div>
              );
            }
          }
          return null;
        })
      ) : (
        <p className="empty-cart-message">Your cart is currently empty.</p>
      )}
      {cartTotalPrice > 0 && (
        <div className="cart-total-price">
          <p>Total Cart Price: ${cartTotalPrice}</p>
        </div>
      )}
    </div>
  );
};

export default CartItems;