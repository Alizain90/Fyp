import React from 'react';
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="FooterContainer">

        <div className="FooterColumn">
        <h2>More About Us</h2>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Help & Support</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Mobile App</a></li>
          </ul>
        </div>

    
        <div className="FooterColumn">
          
          <h2>Categories</h2>
          <ul>
            <li><a href="#">Graphics & Design</a></li>
            <li><a href="#">Digital Marketing</a></li>
            <li><a href="#">Writing & Translation</a></li>
            <li><a href="#">Video & Animation</a></li>
            <li><a href="#">Music & Audio</a></li>
          </ul>
        </div>

        <div className="FooterColumn">
          <h2>How To Do</h2>
          <ul>
            <li><a href="#">SkillSwapping</a></li>
            <li><a href="#">Freelacing</a></li>
            <li><a href="#">Hiring</a></li>
          </ul>
        </div>

        <div className="FooterColumn">
          <h2>Follow Us</h2>
          <ul className="SocialMediaLinks">
            <li><a  target="_blank"><i className="fab fa-facebook fa-2x"></i></a></li>
            <li><a  target="_blank"><i className="fab fa-instagram fa-2x"></i></a></li>
            <li><a  target="_blank"><i className="fab fa-twitter fa-2x"></i></a></li>
            <li><a  target="_blank"><i className="fab fa-linkedin fa-2x"></i></a></li>
            <li><a  target="_blank"><i className="fab fa-youtube fa-2x"></i></a></li>
          </ul>
        </div>
      </div>
      <div className='Divider'>

      </div>
      <p className="FooterCopyright">&copy; 2024 YourCompanyName. All Rights Reserved.</p>

    </div>
  );
};

export default Footer;
