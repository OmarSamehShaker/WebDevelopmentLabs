import React from 'react';

const Navbar = () => (
  <nav className="navbar">
    <div className="nav-left">
      <h1 className="logo">ûdemy</h1>
      <span className="nav-item">Categories</span>
    </div>
    <div className="search-container">
      <span className="search-icon">🔍</span>
      <input type="text" placeholder="Search for anything" className="search-input" />
    </div>
    <div className="nav-right">
      <span className="nav-item hidden-mobile">Plans & Pricing</span>
      <span className="nav-item hidden-mobile">Udemy Business</span>
      <span className="nav-item hidden-mobile">Teach on Udemy</span>
      <span className="nav-icon">🛒</span>
      <button className="btn-login">Log in</button>
      <button className="btn-signup">Sign up</button>
      <button className="btn-globe">🌐</button>
    </div>
  </nav>
);

export default Navbar;
