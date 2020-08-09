import styled from 'styled-components';
import {motion} from 'framer-motion';

export const PriceFormContainer = styled(motion.div)`
width: 100%;
min-height: 50vh;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0 10px;
flex-wrap:wrap;
`

export const PriceContainer = styled.div`
border: 3px solid #e8e8e8;
border-radius: 9px;
width: 340px;
height: 400px;
padding: 15px 20px;
text-align: center;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
font-style: italic;
margin-right: 10px;
> span {
    align-self: flex-start;
    margin-left: 40px;
    margin-top: 7px;
    text-align: left;
    >svg {
        margin-right: 10px;
        color: #e64e04;
    }
}
transition-duration: 0.6s;
&:hover {
    transform: translateY(-20px);
    
}

@media (max-width: 768px) {
    margin: 10px 0;
    >span {
        margin-left: 0;
    }
}

`

export const BestPriceContainer = styled(PriceContainer)`
border: 3px solid #e64e04;
position: relative;
`

export const PriceTitle = styled.div`
    border-bottom: 1px solid rgba(0,0,0,0.1);
    margin-bottom: 15px;
    padding: 0 0 10px 0;
    width: 80%;
    position:relative;
    >h1 {
        margin-bottom: 0;
        font-weight: bolder;
    }
`

export const BestPriceBadge = styled.div`
position: absolute;
top: 0;
left: 0;
background-color: #e64e04;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 64px;
height: 64px;
clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
>svg {
    position:relative;
    right: 15px;
    bottom: 15px;
    font-size: 1.5rem;
}
`