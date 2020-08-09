import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {motion} from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


interface BoldTextProps {
    size?: string
}


interface TitleProps {
    color?: 'primary' | 'secondary',
    size?: string
}

export const MenuList = styled(motion.ul)`
list-style: none;
font-size: 4.5rem;
font-weight: bold;
font-style: italic;

>li {
    color: #e64e04;
    transition-duration: 1s;
    &:hover {
        transform: translate(10px, 10px)
        
    }
};

@media (max-width:768px) {
    font-size: 2.5rem;
}
`

export const CarouselImg = styled.div`
height: 85vh;
width: 100%;
background-position: center;
background-size: cover;
`

export const BoldText = styled.h1<BoldTextProps>`
font-weight: bold;
color: white;
font-size: ${props => props.size? props.size: 'none'};
font-style: italic;
&:after {
    display: block;
    width:100px;
    height: 3px;
    content: '';
    background-color: #e64e04;
}
`

export const Title = styled.h1<TitleProps>`
font-style: italic;
color: ${props => props.color==='secondary' ? '#000000' : '#e64e04' };
font-size: ${props => props.size? props.size : '3.5rem'};
margin: 20px 0;
`

export const SectionTitle = styled(Title)`
position: absolute;
color: white;
top: 10px;
@media (max-width: 900px) {
    position: relative;
    top: 0;
    margin-bottom: 20px;
    grid-area: header
}
&:after {
    display: block;
    width:100px;
    height: 3px;
    content: '';
    background-color: #e64e04;
}
`

export const Link = styled(NavLink)`
position: relative;
color: #e64e04;
div {
    position: relative;
    color: rgba(0,0,0,0.2);
    > span {

        position: absolute;
        transition-duration: 1s;
        color: #e64e04;
}
}

&:hover {
    color: #e64e04;
    div {
        
        > span {
            transform: translate(20px, -15px);
            color: #e64e04;
        }

    }
}
`
export const Image404 = styled.img`
width: 60%;
@media (max-width: 768px) {
    width:80%;
}
`
interface IconProps {
    open: Boolean
}

export const MenuIconContainer = styled.div<IconProps>`
width: 40px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
z-index: 21;
cursor: pointer;
&:first-child {
    transform: ${props => props.open? 'rotateZ(45deg)' : 0};
    transform-origin: 0% 0%
}
> span {
width: 36px;
height: 5px;
border-radius: 2px;
background-color: #e64e04;
margin-bottom: 5px;
transition: all 0.5s ease-in-out;
&:nth-of-type(1) {
    transform: ${props => props.open? 'rotateZ(45deg) ' : 0};
    transform-origin: 0% 50%;
};
&:nth-of-type(3) {
    transform: ${props => props.open? ' translateY(5px) rotateZ(-45deg) ' : 0};
    transform-origin: 0% 50%;
};
&:nth-of-type(2) {
    opacity: ${props => props.open? 0 : 1};

}
}

`

export const CustomIcon = styled(FontAwesomeIcon)`
position: fixed;
top: 40px;
right: 40px;
font-size: 2.5rem;
cursor: pointer;
z-index: 23;
@media (max-width: 768px) {
    top: 20px;
    right: 20px;
}
`

