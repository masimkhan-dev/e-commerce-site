import React, { useContext, useState } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = ({ banner, category }) => {
  const { all_product } = useContext(ShopContext);
  const [itemsToShow, setItemsToShow] = useState(8); // Initial items to show

  // Function to handle Load More button click
  const loadMoreItems = () => {
    setItemsToShow(prev => prev + 6); // Increase by 6 more items
  };

  return (
    <div className="shop-category">
      {/* Display banner image */}
      <img className="shopcategory-banner" src={banner} alt="" />

      {/* Sort Section (Removed Sort functionality) */}
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1 - {Math.min(itemsToShow, all_product.length)} </span>
          out of {all_product.length} products
        </p>
      </div>

      {/* Display filtered products */}
      <div className="shopcategory-products">
        {all_product
          .filter(item => item.category === category) // Filter by category
          .slice(0, itemsToShow) // Show only itemsToShow items
          .map(item => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
      </div>

      {/* Load More Button */}
      {itemsToShow < all_product.length && (
        <div className="shopcategory-loadmore">
          <button onClick={loadMoreItems}>Load More</button>
        </div>
      )}
    </div>
  );
};

export default ShopCategory;
