import React from "react";
import Wrapper from "../assets/wrappers/Plans";

const Plans = () => {
  return <Wrapper>
    <h1>OUR PLANS</h1>
   
    <div className="row-plan">
      <div>
      <h2>FOR SUBSCRIPTIONS</h2>
        <h3>Basic veg meal</h3>
        <h4>₹ 65/meal</h4>
        <p>One month plan</p>
        <p>One time basis - ₹1950</p>
        <p>Two time basis - ₹3900</p>
      </div>
      <div>
          <h2>FOR NON-SUBSCRIPTIONS</h2>
          <h3>Basic veg meal</h3>
          <h4>₹ 80/meal</h4>
        </div>
    </div>
  </Wrapper>;
};

export default Plans;
