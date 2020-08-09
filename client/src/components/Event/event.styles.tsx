import styled from 'styled-components';
import {motion} from 'framer-motion';




export const ImageContainer = styled(motion.div)`
background-position: center;
background-size: cover;
cursor: pointer;
width:100%;
height: 0;
padding-bottom: 100%;
display: flex;
align-items: center;
justify-content: center;
transition-duration: 1s;
backface-visibility: hidden;
position: relative;
> div {
    margin-top: 100%;
    background-color: rgba(0,0,0,0.2);
    width: 50%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    >span {
        font-weight: bold;
        font-size: 1.5rem;
        color: white;
    }
}
`


export const EventInfoContainer = styled(motion.div)`
position: absolute;
width: 100%;
height: 100%;
background-color: white;
padding: 10px;
font-style: italic;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
cursor: default;
transform: rotateY(180deg);
backface-visibility: hidden;
transition-duration: 1s;
>span {
    margin-bottom: 10px;
    >span {
        font-weight: bold;
    }
}
`

export const EventContainer = styled(motion.div)`
display: flex;
height:100%;
position: relative;
perspective: 800px;
&:hover {
    ${ImageContainer} {
        transform: rotateY(180deg)
    }
    ${EventInfoContainer} {
        transform: rotateY(360deg)
    }
}
`