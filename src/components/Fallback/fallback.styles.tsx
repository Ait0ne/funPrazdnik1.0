import styled from 'styled-components';
import {motion} from 'framer-motion';

export const FallbackContainer = styled(motion.div)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width:100%;
height: 100vh;
background-color: #111417;
`

export const FallbackContainerInner = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
> h1 {
    color: white;

}
>svg {
    animation: spinner 2s infinite ease-in-out;
}
@keyframes spinner {
    0% {
        transform: 0
    }
    100% {
        transform: rotateZ(360deg)
    }
}

@media (max-width: 768px) {
    >h1 {
        font-size: 2rem;
    }
}
`
