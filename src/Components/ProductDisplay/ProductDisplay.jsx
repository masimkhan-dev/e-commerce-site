import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext); // Extract addToCart function from context

  // Early return to handle the case where the product is undefined
  if (!product) {
    return <div>Product not found!</div>; // Fallback UI if product is not available
  }

  return (
    <div className="productdisplay">
      {/* Left Section - Product Images */}
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt={product.name} />
        </div>
      </div>

      {/* Right Section - Product Details */}
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="Star Icon" />
          <img src={star_icon} alt="Star Icon" />
          <img src={star_icon} alt="Star Icon" />
          <img src={star_dull_icon} alt="Dull Star Icon" />
          <span>4.5 (250)</span>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right--price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right--price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus excepturi fugit officia nam sit aliquam fuga maxime iusto architecto eius impedit qui facere molestiae similique corrupti veritatis earum, omnis cupiditate.
        </div>
        <div className="product-display-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={() => {
          addToCart(product.id); // Add product to cart
          console.log('Product added to cart'); // Log the message to the console
        }}>ADD to Cart</button>
      </div>
    </div>
  );
};

export default ProductDisplay;
