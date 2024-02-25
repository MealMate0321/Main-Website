import styled from "styled-components";

const Wrapper = styled.div`
    position: fixed;
    z-index: 10;
    bottom: 20px;
    right: 30px;
    height: 80px;
    width: 80px;
    border: 3px solid var(--green);
    border-radius: 50%;
    box-shadow: 0px 10px 10px rgba(0,0,0,0.8);
    img{
        width: 100%;
        padding: 15px;   
    }

`
export default Wrapper