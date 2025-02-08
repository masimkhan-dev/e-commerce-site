import React, { useState } from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup

  const toggleForm = () => {
    setIsLogin(!isLogin); // Toggle between login and signup
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <div className="loginsignup-fields">
          {!isLogin && <input type="text" placeholder="Username" />}
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button>{isLogin ? 'Login' : 'Continue'}</button>
        <p className="loginsignup-login">
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <span onClick={toggleForm}>{isLogin ? 'Sign Up' : 'Login'}</span>
        </p>
        {!isLogin && (
          <div className="loginsignup-agree">
            <input type="checkbox" id="agree" name="agree" />
            <label htmlFor="agree">I agree to the terms and conditions</label>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;