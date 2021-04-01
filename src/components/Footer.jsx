/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import Logo from '../assets/images/logo.svg';
import Github from '../assets/images/icon-github.svg';
import Linkedin from '../assets/images/icon-linkedin.svg';
import Facebook from '../assets/images/icon-facebook.svg';

function Footer() {
  return (
    <div className="container footer">
      <img src={ Logo } className="svg-color" />
      <ul className="footer-ul">
        <ul className="footer-li">
          <li>Features</li>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
        <ul className="footer-li">
          <li>Resources</li>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
        <ul className="footer-li">
          <li>Company</li>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
      </ul>
      <div className="icons">
        <a href="https://www.facebook.com/joaopedro.kohlsbast" target="_blank">
          <img src={Facebook} alt="Facebook"/>
        </a>
        <a href="https://github.com/jpbast" target="_blank">
          <img src={Github} alt="Github"/>
        </a>
        <a href="https://www.linkedin.com/in/jpbast/" target="_blank">
          <img src={Linkedin} alt="Linkedin"/>
        </a>
      </div>
    </div>
  );
}

export default Footer;
