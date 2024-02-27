// import React from "react";
// import styled from "styled-components";

// const Offer = () => {
//   return <Wrapper>

//     <div className="para">
//         <p>For first 15 mates, 10% off on subscription plan</p>
//         <p>For next 20 mates, 8% off on subscription plan</p>
       
//     </div>
//     <div className="para">
//         <p>For first 15 mates, 8% off on non - subscriptions</p>
//         <p>For next 20 mates, 5% off on non-subscriptions</p>
//     </div>

//   </Wrapper>;
// };

// const Wrapper = styled.div`
//     background: var(--dark-grey);
//     padding-top: 10px;
//     .para{
//         display: flex;
//         p{
//            
//             color: var(--light-bg);
//         }
//         p:before {
//             content: "★ ";
//             color: var(--red); 
//             margin-right: 5px; 
//         }
//     }
// `
// export default Offer;
import React from "react";
import styled, { keyframes } from "styled-components";

const Offer = () => {
  return (
    <Wrapper>
      <div className="para">
        <p className="blink-zoom">For first 15 mates, 10% off on subscription plan</p>
        <p className="blink-zoom">For next 20 mates, 8% off on subscription plan</p>
      </div>
      <div className="para">
        <p className="blink-zoom">For first 15 mates, 8% off on non-subscriptions</p>
        <p className="blink-zoom">For next 20 mates, 5% off on non-subscriptions</p>
      </div>
    </Wrapper>
  );
};

const blinkZoom = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
  100% {
    opacity: 0;
    transform: scale(0.9);
  }
`;

const Wrapper = styled.div`
  background: var(--dark-grey);
  padding-top: 10px;

  .para {
    display: flex;

    p {
        width: 48%;
      color: var(--light-bg);
      animation: 6s ${blinkZoom} 6s linear infinite alternate;
      margin-bottom: 10px;
    }
    p:before {
                content: "★ ";
             color: var(--red); 
            margin-right: 5px; 
        }
    .blink-zoom:nth-child(odd) {
      animation-delay: 0.5s;
    }
  }
  @media screen and (max-width: 768px) {
    .para{
      flex-direction: column;
      p{
        width: 98%;
      }
    }
  }
`;

export default Offer;
