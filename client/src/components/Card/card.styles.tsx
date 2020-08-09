import styled from 'styled-components';
import {motion} from 'framer-motion';

export const CardContainer = styled(motion.div)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position:relative;
font-style: italic;
width: 300px;
height: 380px;
margin: 10px 10px;
overflow:hidden;
border-radius: 10px;
transition: all  0.3s ease-in-out;
box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20);
cursor: default;
&:hover {
    box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.20);
    transform: translateY(-20px); 
}
@media (max-width: 660px) {
    width: 100%;
    height: auto;
    margin:0 0 10px 0;
    border-radius: 45px 45px 0 0;
    box-shadow:none;
    &:hover {
        transform: none;
        box-shadow: none;
    }
}
`

export const CardImage = styled.img`
width: 100%;
height: 50%;
`

export const CardBodyContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 50%;
width: 100%;
padding: 20px 15px;
text-align: center;
position: relative;
>h3 {
    border-bottom: 1px solid #e64e04;
    padding-bottom: 5px;
}
`

export const CardFloatingButton = styled.div`
position: absolute;
top:-25px;
background-color: #e64e04;
color: white;
font-size: 1.2rem;
font-weight: bold;
right: 10px;
width: 50px;
height: 50px;
border-radius: 50%;
display:flex;
align-items:center;
justify-content:center;
cursor: pointer;
&:hover {
    color: black;
}
`
