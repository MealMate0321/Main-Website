import styled from "styled-components";

const Wrapper = styled.div`
        h1,h3{
                text-align: center;
                color: var(--yellow);
            }
        h4{
            text-align: center;
            color: var(--light-bg);
        }
    .row-plan{
        display: flex;     
        div{
            background-color: var(--green);
            width: 47%;
            margin: 10px;
            padding: 10px;
            border-radius: var(--border-radius-1);
            box-shadow: 0 10px 10px rgba(0,0,0,0.3);
        }
        p{
            color: var(--red);
        }
    }
`

export default Wrapper