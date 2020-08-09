import styled from 'styled-components';
import {motion} from 'framer-motion';

interface JumbotronProps {
    height?: string,
    moreTextSpace?: boolean
}

export const JumbotronContainer = styled(motion.div)<JumbotronProps>`
width:100%;
height: ${props => props.height? props.height: '50vh'};
position: relative;
background-color: black;

@media (max-width: 768px) {
    height: 70vh;
}

`


export const JumbotronBackgroundImage = styled(motion.div)`
background-color: black;
background-size: cover;
background-position: center;
width: 100%;
height: 100%;
opacity: 0.7;
position: relative;
`

export const JumbotronTitleContainer = styled(motion.div)<JumbotronProps>`
position: absolute;
top: 22vh;
left: 15%;
padding: 10px;
display: flex;
flex-direction:column;
justify-content: center;
align-items:center;
> span {
    color: white;
    font-style: italic;
    font-size: 1.5rem;
    font-weight: bold;
    > div {
        max-width: 50ch;
    }
    > h1 {
        font-size: 4.5rem;
        font-weight: bold;
        &:after {
        display: block;
        width:150px;
        height: 3px;
        content: '';
        background-color: #e64e04;
}
    }
}

@media (max-width: 768px) {
top: 22vh;
left: 0;
width: 100%;
text-align: center;
    > span {
        font-size: ${props => props.moreTextSpace? '1.2rem': '1.7rem'};
        > h1 {
            font-size: ${props => props.moreTextSpace? '2rem': '3rem'};
            font-weight: bold;
        }
    }
}
@media (max-width: 400px) {
    top: ${props => props.moreTextSpace? '10vh': '20vh'};
    >span {
        font-size: ${props => props.moreTextSpace? '1rem': '1.7rem'};
    }
}

`