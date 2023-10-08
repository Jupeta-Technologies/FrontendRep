import React, { useState } from 'react';

const TogglePage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login or signup logic here
    console.log('Form submitted:', isLogin ? 'Login' : 'Signup');
  };

  return (
    <div>
      <div>
        <button onClick={handleToggle} className={isLogin ? 'active' : ''}>
          Login
        </button>
        <button onClick={handleToggle} className={isLogin ? '' : 'active'}>
          Sign Up
        </button>
      </div>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <br />
        {isLogin ? null : (
          <div>
            <label>
              Confirm Password:
              <input type="password" name="confirmPassword" required />
            </label>
            <br />
          </div>
        )}
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
    </div>
  );
};

export default TogglePage;
