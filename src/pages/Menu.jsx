import React from "react";
import veg from "../assets/images/1.png"
import nonveg from "../assets/images/2.png"
import styled from "styled-components";
import cut from "../assets/images/cook3.png"

const Menu = () => {
  return <Wrapper>
    <div><img src={veg} alt="" /></div>
    <div><img src={nonveg} alt="" /></div>
    <div style={{backgroundColor:'var(--light-bg'}}>
    <ul>
      <h3 style={{textAlign:'left'}}>Note:</h3>
        <li>Sweets also available in the meal - 5/per meal</li>
        <li>The menu shows what food we'll have during the first week, just to give you an idea.</li>
        <li>We also offer a complete non-vegetarian plan, with non-veg options available for both lunch and dinner.</li>
      </ul>
    </div>
    <div>
    <img src={cut} width="50%"/>
    </div>
  </Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  ul{
    list-style-type: none;
    text-align: justify;
    padding:20px;
    color:var(--red);
    border-radius:var(--border-radius-1);
    line-height: 28px;
  }
  ul li:before {
            content: "★ ";
            color: var(--red); 
            margin-right: 5px; 
        }
  div{
    width: 45%;
    margin: 20px;
    box-shadow: 0px 20px 20px rgba(0,0,0,0.6);
    border-radius: var(--border-radius-1);
    transition: 0.3s ease-in;
    img{
      width: 100%;
      border-radius: var(--border-radius-1);
    }
  }
  div:hover{
    box-shadow: none;
  }
  @media screen and (max-width: 992px){
    div{
      width: 90%;
    }
  }
`
export default Menu;
