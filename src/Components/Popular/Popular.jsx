import React from 'react';
import './Popular.css';
import data_product from '../Assets/data';  // Ensure this is a valid import
import Item from '../Item/Item';

const Popular = () => {
  return (
    <div className="popular">
      <h1>Popular in Women</h1>
      <hr />
      <div className="popular-item">  {/* Fixed the class name to match CSS */}
        {data_product.map((item) => {  // Using item.id as key
          return (
            <Item 
              key={item.id}  // Using item.id for better performance
              id={item.id} 
              name={item.name} 
              image={item.image} 
              new_price={item.new_price} 
              old_price={item.old_price} 
            />
          );
        })}
      </div>
    </div>
  );
}

export default Popular;
