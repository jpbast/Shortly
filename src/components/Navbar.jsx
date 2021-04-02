/* eslint-disable max-len */
import React, {useEffect, useState} from 'react';
import Logo from '../assets/images/logo.svg';
import '../styles/MenuNavigation.css';

function Navbar() {
  const [icon, setIcon] = useState(false);
  const [size, setSize] = useState(1);
  const [flag, setFlag] = useState(true);

  window.addEventListener('resize', () => {
    setSize(window.innerWidth);
  });

  function handleIcon() {
    setIcon(!icon);
  }

  useEffect(() => {
    if (size > 830 && flag) {
      setIcon(false);
      setFlag(false);
    }
    if (size <= 830 && !flag) {
      setFlag(true);
    }
  }, [size]);


  return (
    <div className="navbar">
      <img src={Logo} alt="Logo"/>
      <div className={icon && flag ? 'mob-nav-container' : 'nav-container'} >
        <ul style={icon && flag ? {display: 'flex'} : {}}>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
        <div className={icon ? 'login' : 'login-signup'}>
          <span>Login</span>
          <button>Sign Up</button>
        </div>
      </div>
      <div onClick={handleIcon} className="menu-icon-container">
        <div className="menu-icon"></div>
        <div className="menu-icon"></div>
        <div className="menu-icon"></div>
      </div>
    </div>
  );
}

export default Navbar;
