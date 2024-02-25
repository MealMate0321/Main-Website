import styled from "styled-components";

const Wrapper = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    margin-left: 10%;
    background-color: var(--secondary-background-color);
    box-shadow: 0px 20px 20px rgba(0,0,0,0.8);
    border-radius: var(--border-radius-1);
    padding: 10px 20px;
    margin-bottom: 20px;
        .contact{
            width: 30%;
            div{
                border: 1px solid var(--light-bg);
                margin: 10px;
                text-align: center;
                border-radius:var(--border-radius-2);
            }
        }
        .contact-form{
            display: flex;
            flex-direction: column;
            width: 70%;
            margin: 10px;
            padding: 20px;
            padding-top: 50px;
            align-items: center;
            justify-content: center    ;
            h1{
                color: var(--yellow);
                text-align: center;
            }
            button{
                margin: 10px;
                padding: 10px 30px;
                font-size: 1rem;
                background-color: var(--yellow);
                color: white;
                border: 1px solid white;
                border-radius: var(--border-radius-2);
                transition: 0.5s ease-in;
                &:hover{
                    background-color: transparent;
                    color: white;
                }
                a{
                    text-decoration: none;
                    color: var(--red);
                }
            }
        }
        @media screen and (max-width:992px){
            flex-direction: column-reverse;
            .contact, .contact-form{
                width: 100%;
            }
        }
        
`

export default Wrapper