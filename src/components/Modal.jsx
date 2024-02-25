import React from "react";
import Qr from "../assets/images/qr.png";
import Wrapper from "../assets/wrappers/Modal";
import styled from "styled-components";
import { ImCross } from "react-icons/im";

const Modal = ({onClose}) => {

    return (
        <Wrapper>
            <ModalContent>
            <ImCross onClick={onClose} style={{float:'right',color:'var(--red)'}}/>
            <p>Scan the QR to place order or click the link below</p> 
                <img src={Qr} alt="WhatsApp" />
            </ModalContent>
        </Wrapper>
    );
};

const ModalContent = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -40%);
    z-index: 100;
    p{
        color: var(--light-bg);
        padding-left: 10px;
    }
`;

export default Modal;
