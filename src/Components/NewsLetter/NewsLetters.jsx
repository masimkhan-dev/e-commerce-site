import React from 'react'
import './NewsLetters.css'
const NewsLetters = () => {
  return (
<div className="newsletter">
    <h1>GEt Exclusive offers on your email</h1>
    <p>Subscribe to our newsletter and stay updated </p>
    <div>
        <input type="text" placeholder="Your email address" />
        <button>Subscribe</button>
    </div>
</div>
  )
}

export default NewsLetters
