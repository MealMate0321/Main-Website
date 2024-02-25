import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    background-color: var(--green);
    color: var(--yellow);
    div{
        width: 33%;
        padding: 10px;
        .title{
            font-size: 24px;
        }
        p{
            text-align: justify;
            font-size: 14px;
            color: var(--light-bg);
        }
    }
    .quick-links{
            display: flex;
            flex-direction: column;
            align-items: center;
            .link{
                color: var(--light-bg);
                transition: 0.5s ease-in;
            }
            .link:hover{
                color: var(--red);
                text-decoration: underline;
                text-decoration-style: wavy;
            }
        }
    .social-media{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 30%;
        .social-links{           
            svg{
                font-size: 2rem;
                padding: 5px 10px;
                border: 1px solid var(--light-bg);
                color: white;
                border-radius: 3px;
                transition: 0.4s ease-in-out;
            }
            svg:hover{
                background-color: var(--light-bg);
                color: var(--red);
                border-radius: 8px;
                box-shadow: 0px 10px 10px rgba(0,0,0,0.8);
            }
        }
    }
    @media screen and (max-width: 992px){
            flex-direction: column;
            width: 100%;
            div{
                width: 100%;
                align-items: center;
                justify-content: center;
            }
            .social-media{
                width: 100%;
                .social-links{
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    margin: 10px;
                    margin-bottom: 3rem;
                    div{
                        width: 40px;
                    }
                }
            }
    }
   
`

export default Wrapper