import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Item = (props) => {

  // Animation variants for initial load
  const itemVariants = {
    initial: { opacity: 0, scale: 0.9 }, // Start with 0 opacity and 0.9 scale
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } }, // Animate to full opacity and scale
  };

  // Function to handle image click and scroll to the top
  const handleImageClick = () => {
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: 'smooth', // Smooth scroll animation
    });
  };

  return (
    <motion.div
      className="item"
      variants={itemVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Link to={`/product/${props.id}`}>
        <img 
          src={props.image} 
          alt={props.name} 
          onClick={handleImageClick} // Attach the click event
        />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${props.new_price}</div>
        {props.old_price && (
          <div className="item-price-old">${props.old_price}</div>
        )}
      </div>
    </motion.div>
  );
};

export default Item;
