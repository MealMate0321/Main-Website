import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Plans";

const Plans = () => {
  const plans = [
    {
      name:"MINI MEAL",
      price:"49/meal",
      roti:"2",
      rice:"1/2 bowl",
      dal:"1/2 bowl dal",
      sbji:"1/2 bowl sbji",
      oneTime:"₹1620",
      twoTime:"₹2940"
    },
    {
      name:"REGULAR VEG MEAL",
      price:"65/meal",
      roti:"4",
      rice:"1 bowl",
      dal:"1 bowl",
      sbji:"1 bowl",
      oneTime:"₹2100",
      twoTime:"₹3900"
    },
  ]
  const [roti, setRoti] = useState(0);
  const [rice, setRice] = useState(0);
  const [dal, setDal] = useState(0);
  const [sabji, setSabji] = useState(0);
  const [finalTotal,setFinalTotal] = useState(0);
  const basePrice = 40;
  const prices = { roti: 2.5, rice: 5, dal: 7, sabji: 7 };

  const calculateTotal = () => {
    let total =
      roti * prices.roti + rice * prices.rice + dal * prices.dal + sabji * prices.sabji;
    setFinalTotal(total+basePrice);
  };
  return <Wrapper>
    <h1>OUR PLANS</h1>
   
    <div className="row-plan">
      {
        plans.map((plan)=>{
          return <div className="plan">
          <h2>{plan.name}</h2>            
            <h4>{plan.price}</h4>
            <div className="count">
            <p><span>Rice :</span> {plan.rice}</p>
            <p><span>Roti :</span> {plan.roti}</p>
            <p><span>Dal :</span> {plan.dal}</p>
            <p><span>Sbji :</span> : {plan.sbji}</p>
            </div>
            <div className="subscription">
              <p>One time plan: <span>{plan.oneTime}</span> for 30 days</p>
              <p>Two time plan: <span>{plan.twoTime}</span> for 30 days</p>
            </div>
          </div>
        })
      }
      <div className="plan">
          <h2>REGULAR NON-VEG MEAL</h2>            
            <h4>80/meal</h4>
            <div className="count">
            <p><span>Rice :</span> 1 bowl</p>
            <p><span>Roti :</span> 4</p>
            <p>3-4 pc. chicken / 2 eggs</p>
            </div>
            <div className="subscription">
              <p>Non-veg is available on Monday, Wednesday, Friday & Sunday</p>
              <p>Non-veg not provided on festivals</p>
            </div>
          </div>
      <div className="plan">
          <h2>FOR NON-SUBSCRIPTIONS</h2>
         <div className="subscription" style={{marginTop:"20px"}}>
         <h4>Basic veg meal : ₹ 80/meal</h4>
         <h4>Basic non-veg meal : ₹ 95/meal</h4>
         </div>
        </div>
    </div>
    <h3 className="custom-head">NEED MORE CUSTOMIZATION??</h3>
    <div className="price-calculator">
        <h2>Tiffin Price Calculator</h2>
      <div>
      <div >
        <label>Roti:</label>
        <input type="text" value={roti || 0} onChange={(e) => setRoti(Number(e.target.value))} />
      </div>
      <div >
        <label>Rice :</label>
        <input type="text" value={rice || 0} onChange={(e) => setRice(Number(e.target.value))} />
      </div>
      <div >
        <label>Dal:</label>
        <input type="text" value={dal || 0} onChange={(e) => setDal(Number(e.target.value))} />
      </div>
      <div >
        <label>Sabji:</label>
        <input type="text" value={sabji || 0} onChange={(e) => setSabji(Number(e.target.value))} />
      </div>
      <button onClick={calculateTotal}>Calculate</button>
      </div>
      <h3>Total Price: ₹{finalTotal}</h3>
    </div>
  </Wrapper>;
};

export default Plans;
