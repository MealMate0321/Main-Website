import React from "react";
import {  Slider } from "../components";
import { Link } from "react-router-dom";
import "../assets/css/Landing.css";
import menu from "../assets/images/menu.png";
import hygiene from "../assets/images/hygiene.png";
import food from "../assets/images/food.png";
import customer from "../assets/images/customer-service.png";
const Landing = () => {
  return (
    <>
      <Slider/>
      <div className="order">
        <Link to="menu" className="link-btn">ORDER YOUR TIFFIN NOW</Link>
      </div>
      <div>
        <h2 className="heading">WHY MEAL MITRA..??</h2>
        <p style={{fontWeight:'bold',color:'gray'}}>Learn more about us</p>
        <div className="about">
         <div>
          <img src={food} alt="BEST QUALITY INGREDIENTS" />
         <h3 className="head">BEST QUALITY INGREDIENTS</h3>
          <p>We source the finest ingredients from local suppliers and farmers' markets to ensure 
            that every meal is bursting with flavor and nutrients.</p>
        </div>         
        <div>
        <img src={hygiene} alt="HYGIENIC PRACTICES" />
          <h3 className="head">HYGIENIC PRACTICES</h3>
          <p>We adhere to strict hygiene standards and follow best practices for food safety to ensure that your 
            meals are prepared and delivered safely.</p>
        </div>
        </div>
        <div className="about">
        <div>
        <img src={menu} alt="EASY ORDERING" />
          <h3 className="head">EASY ORDERING</h3>
          <p>Enjoy the ease of ordering your favorite meals directly through WhatsApp, making meal planning hassle-free 
            and convenient for you.</p>
        </div>
        <div>
        <img src={customer} alt="PERSONALIZED SERVICE" />
          <h3 className="head">PERSONALIZED SERVICE</h3>
          <p>Our team is dedicated to providing exceptional service and personalized attention to every customer. 
            From menu planning to delivery, we go above and beyond to exceed your expectations.</p>
        </div>
      </div>
        </div>
    </>
  )
};

export default Landing;
