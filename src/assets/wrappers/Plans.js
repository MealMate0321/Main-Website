import styled from "styled-components";

const Wrapper = styled.div`
        h1,h3{
                text-align: center;
            }
        h4{
            text-align: center;
        }
    .row-plan{
        display: flex;     
        justify-content: space-evenly;
        .plan{
            background-color: #ddd;
            width: 22%;
            margin: 10px;
            padding: 10px 14px;
            border-radius: var(--border-radius-1);
            border: 1px solid black;
        }
        h2,h4{
            font-size:1.2rem;
        }
        h4{
            color: var(--border-radius-1);
        }
        p{
           
            padding:0;
            margin: 0;
            text-align: left;
            span{
                font-weight: bold;
            }
        }
        .count{
            margin: 16px 0;
            width: 100%;
        }
    }
    .price-calculator{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: var(--light-bg);
        border-radius: var(--border-radius-1);
        border: 1px solid black;
        width: 50%;
        margin: 20px auto;
        padding: 20px;
        input{
            border: 1px solid black;
            border-radius: 4px;
            margin: 8px;
            color: black;
        }
        label{
            font-weight: bold;
            margin: 2px 8px;
        }
        button{
            display: block;
            margin: 10px auto;
            background-color: var(--green);
            padding: 10px;
            color: white;
            border-radius: 4px;

        }
        h3{
            color: var(--green);
            font-weight: bold;
        }
    }
    .custom-head{
        background-color: var(--green);
        color: white;
        padding: 10px;
        margin-top: 40px;
    }
    @media screen and (max-width:768px) {
        .row-plan{
            flex-direction: column;
            .plan{
                width: 94%;
            }
        }
        .price-calculator{
            width: 90%;
        }
    } 
`

export default Wrapper