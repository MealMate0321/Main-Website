import React from "react";
import Wrapper from "../assets/wrappers/Footer";
import {Link} from "react-router-dom"
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";


const Footer = () => {
  return <Wrapper>
    <div className="aboutus">
        <h3 className="title">About Us</h3>
        <p>Welcome to Meal Mate, where we believe in delivering more than just food – we deliver comfort, 
            convenience, and culinary delight right to your doorstep. With a passion for providing wholesome, 
            homemade meals, we strive to make every bite an experience to savor.
</p>
    </div>
    <div className="quick-links">
        <h3 className="title">Quick Links</h3>
        <Link to="/" className="link">Home</Link>
        <Link to="/menu" className="link">Menu</Link>
        <Link to="/plans" className="link">Our Plans</Link>
        <Link to="about-us" className="link">About Us</Link>
    </div>
    <div className="social-media">
        <h3 className="title">Social Media</h3>
        <div className="social-links">
            <div><FaInstagram/></div>
            <div><FaWhatsapp/></div>
            <div><FaFacebookF/></div>
        </div>
    </div>
  </Wrapper>;
};

export default Footer;
