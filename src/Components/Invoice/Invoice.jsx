// Invoice.js
import React, { useContext, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import './Invoice.css';

const Invoice = () => {
  const { all_product, cartItems } = useContext(ShopContext);
  const [shippingAddress, setShippingAddress] = useState({
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);

  // Calculate subtotal
  const subtotal = Object.entries(cartItems).reduce((acc, [itemId, quantity]) => {
    const product = all_product.find(p => p.id === parseInt(itemId));
    return product && quantity > 0 ? acc + (product.new_price * quantity) : acc;
  }, 0);

  // Calculate shipping fee based on subtotal
  const calculateShippingFee = () => {
    if (subtotal === 0) return 0;
    if (subtotal >= 100) return 0; // Free shipping for orders over $100
    return 10; // Standard shipping fee
  };

  const tax = subtotal * 0.1;
  const shippingFee = calculateShippingFee();
  const total = subtotal + tax + shippingFee;

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    alert('Payment processed successfully!');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="invoice-container">
      <div className="invoice-header">
        <h2>Invoice</h2>
        <button onClick={handlePrint} className="print-button">
          🖨️ Print
        </button>
      </div>

      <div className="order-summary">
        <h3>Order Summary</h3>
        {Object.entries(cartItems).map(([itemId, quantity]) => {
          const product = all_product.find(p => p.id === parseInt(itemId));
          if (product && quantity > 0) {
            return (
              <div key={itemId} className="order-item">
                <span>{product.name} × {quantity}</span>
                <span>${(product.new_price * quantity).toFixed(2)}</span>
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="shipping-address">
        <h3>
          📍 Shipping Address
        </h3>
        <div className="address-form">
          <input
            type="text"
            name="street"
            placeholder="Street Address"
            value={shippingAddress.street}
            onChange={handleAddressChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={shippingAddress.city}
            onChange={handleAddressChange}
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={shippingAddress.state}
            onChange={handleAddressChange}
          />
          <input
            type="text"
            name="zipCode"
            placeholder="ZIP Code"
            value={shippingAddress.zipCode}
            onChange={handleAddressChange}
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={shippingAddress.country}
            onChange={handleAddressChange}
          />
        </div>
      </div>

      <div className="cost-breakdown">
        <div className="cost-item">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="cost-item">
          <span>Tax (10%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="cost-item">
          <span className="shipping-label">
            🚚 Shipping
            {shippingFee === 0 && subtotal > 0 && (
              <span className="free-shipping-badge">Free</span>
            )}
          </span>
          <span>${shippingFee.toFixed(2)}</span>
        </div>
        <div className="total-cost">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <div className="invoice-footer">
        <button
          onClick={handlePayment}
          disabled={isProcessing || total === 0}
          className="payment-button"
        >
          {isProcessing ? 'Processing...' : '💳 Process Payment'}
        </button>
        
        {total === 0 && (
          <p className="empty-cart-message">
            Your cart is empty. Add items to proceed with payment.
          </p>
        )}
        
        {total >= 100 && (
          <p className="success-message">
            ✓ Free shipping applied
          </p>
        )}
      </div>
    </div>
  );
};

export default Invoice;