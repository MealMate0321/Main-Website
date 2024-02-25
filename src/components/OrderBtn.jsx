// OrderBtn.js
import React, { useState } from "react";
import Wrapper from "../assets/wrappers/OrderBtn";
import Wp from "../assets/images/wp.png";
import Modal from "./Modal";
import styled from "styled-components";

const OrderBtn = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <Wrapper>
            <img src={Wp} alt="" onClick={openModal}/>
            {isModalOpen && <Overlay/>}
            {isModalOpen && <Modal onClose={openModal}/>}
        </Wrapper>
    );
};

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 98; /* Ensure it's below the modal */
    background: rgba(78, 113, 98, 0.916);
    width: 100%;
    height: 100%;
`;

export default OrderBtn;
