import styled from "styled-components";

const Wrapper = styled.div`
    h1{
        text-align: center;
        color: var(--green);
    }
        div{
            display: flex;
            margin: 20px;
            align-items: center;
            .image{
                width: 50%;
            }
           
        }
        p{
            width: 45%;
            text-align: justify;
            padding: 10px;
        }
    @media screen and (max-width:992px){
        div{
            flex-direction: column;
            width: 100%;
            margin: 0;
            .image{
                width: 80%;
            }
        }
        p{
            width: 80%;
        }
    }
`

export default Wrapper