import React from "react";
import Wrapper from "../assets/wrappers/About";
import Cook from "../assets/images/cook1.jpg";
import Cook1 from "../assets/images/cook2.jpg";

const AboutUs = () => {
  return <Wrapper>
  <h1>About Us</h1>
  <div>
    <p>
      Welcome to Meal Mitra, where we believe in delivering more than just food – we deliver comfort, 
      convenience, and culinary delight right to your doorstep. With a passion for providing wholesome, 
      homemade meals, we strive to make every bite an experience to savor.
    </p>
    <div className="image">
     <img src={Cook} alt="" style={{width:'100%'}}/>
    </div>  
  </div>
  <div>
  <div className="image">
     <img src={Cook1} alt="" style={{width:'100%'}}/>
    </div>  
    <p>
      At Meal Mitra, we understand the importance of quality, freshness, and flavor. Our team of dedicated chefs crafts 
      each meal with love and attention to detail, using only the finest ingredients sourced locally. Whether you're 
      craving traditional favorites or exploring new culinary horizons, we have a menu that caters to every palate and 
      Experience the convenience of delicious, home-cooked meals delivered straight to your door with Meal Mitra. 
      Join us in our culinary journey, where every meal is a celebration of flavor, freshness, and fulfillment..
    </p>
  </div>
  </Wrapper>
};

export default AboutUs;
