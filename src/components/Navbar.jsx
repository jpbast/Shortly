import React from 'react';
import Logo from '../assets/images/logo.svg';

function Navbar() {
  return (
    <div className="navbar">
      <img src={Logo} alt="Logo"/>
      <ul>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
      <div className="login-signup">
        <span>Login</span>
        <button>Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;
