import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ContainerProps {
    direction?: string,
    top?: string,
    height?: string,
    color?: string
}

interface BackgroundImageContainerProps {
    hover?: boolean
}

interface CircleInfoContainerProps {
    position: number,
    circleSize: number,
    direction?: string
}

export const Container = styled(motion.div)<ContainerProps>`
display:flex;
justify-content:center;
align-items: center;
flex-direction: ${props => props.direction? props.direction: 'column'};
width: 100vw;
min-height: ${props => props.height? props.height: '100%'};
position: relative;
margin-top: ${props =>  props.top};
background-color: ${props => props.color? props.color: '#111417'};
`


export const HeaderContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
background-color: transparent;
position: fixed;
top: 0;
z-index: 10;
`

export const NavigationContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 90vw;
height: 100px;
> a >svg {
    width: 80px
    
}
@media (max-width: 768px) {
    height: 60px;
    >a >svg {
        width: 50px;
    }
}
` 

export const MenuContainer = styled(motion.div)`
display:flex;
flex-direction: row;
justify-content:center;
align-items: center;
width: 100vw;
min-height:100vh;
position: fixed;
top:0;
left:0;
background-color: whitesmoke;
z-index: 20;
`

export const CarouselContainer = styled.div`
width:100%;
height: 100%;
opacity: 0.8;
@media (max-width: 768px) {
    opacity: 0.6
}
`

export const MainTextContainer = styled.div`
width: 450px;
position: absolute;
top: 30vh;
left: 10vw;
color: white;
> h1 {
    font-size: 4.5rem;
}
@media (max-width: 768px) {
    width: 100%;
    top: auto;
    left: auto;
    text-align: center;
    padding-left: 20px;
    > h1 {
        font-size: 2.5rem;
    }
    > h2 {
        font-size: 1.8rem;
    }

}
`
export const GalleryContainer = styled(motion.div)`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: 1fr 1fr;
width: 100%;
@media (max-width: 768px) {
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: 1fr 1fr;
}
`

export const GalleryItemContainer = styled(motion.div)`
display: flex;
align-items: center;
width:100%;
justify-content: center;
position: relative;
overflow: hidden;
`

export const BackgroundImageContainer = styled.div<BackgroundImageContainerProps>`
background-position: center;
background-size: cover;
transition-duration: 1s;
cursor: pointer;
opacity: ${props => props.hover? 0.5 : 1};
transform: ${props => props.hover? 'scale(1.1)': 'none' };
width:100%;
height: 0;
padding-bottom: 100%;
display: flex;
align-items: center;
justify-content: center;
`
export const GalleryItemInfo = styled(motion.div)`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: absolute;
color: white;
cursor: pointer;
text-align: center;
`

export const InfoContainer = styled(motion.div)`
position: absolute;
display:flex;
align-items: center;
justify-content: center;
` 
export const InfoContainerBase = styled(InfoContainer)`
@media (max-width: 900px) {
    display: none
}
`

export const CircleInfoContainer = styled(InfoContainer)<CircleInfoContainerProps>`

transform: rotate(${props=> 60*(props.position-1)}deg) translate(${props=>props.circleSize}px) rotate(-${props=> 60*(props.position-1)}deg) ;
display:flex;
flex-direction: ${props => props.direction? props.direction: 'row'};
align-items: flex-start;
justify-content: center;
cursor: pointer;
@media (max-width: 900px) {
    transform: none;
    position: relative;
    justify-content: flex-end;
}
@media (max-width: 588px) {
    width: 100%;
    padding: 20px;
    margin:0;
    justify-content: center
}

`

export const InfoTextContainer = styled(motion.div)<CircleInfoContainerProps>`
cursor: pointer;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
transform: 
rotate(${props=> 60*(props.position-1)}deg) 
translate(${props=>props.circleSize}px) 
rotate(-${props=> 60*(props.position-1)}deg) 
translate(${props => [1,2,6].includes(props.position)? '200px': '-200px'}) ;
position: absolute;
margin-left: 20px;
margin-right: 10px;
width: 250px;
text-align: center;
> p {
    margin-bottom: 0;
}
> h1 {
    color: white;
}
font-style: italic;
@media (max-width: 1200px) {
    width: 180px;
    transform: 
    rotate(${props=> 60*(props.position-1)}deg) 
    translate(${props=>props.circleSize}px) 
    rotate(-${props=> 60*(props.position-1)}deg) 
    translate(${props => [1,2,6].includes(props.position)? '140px': '-140px'}) ;
    > p {
        font-size: 0.8rem;
    }
    > h1 {
        font-size: 1.8rem;
    }
}
@media (max-width: 900px) {
    position: relative;
    transform: none;
    width: 60%;
    > p {
        font-size: 1rem;
    }
    > h1 {
        font-size: 2.5rem;
    }
}
@media (max-width: 588px) {
    width: 100%;
    padding: 20px;
    margin:0;
}


`

export const ThirdSectionContainer = styled(Container)`
background-color: #111417;
color: white;
@media(max-width: 900px) {
    display: grid;
    height: auto;
    text-align: center;
    grid-template-columns: 1fr 1.5fr;
    grid-template-rows: repeat(7, 1fr);
    grid-template-areas: 
    'header header'
    'icon content'
}
@media (max-width: 588px) {
    display: flex;
    flex-direction: column;
    > h1 {
        font-size: 2.5rem;
    }
}
`

export const FooterContainer = styled.div`
display: flex;
position: relative;
flex-direction: row;
justify-content: center;
align-items: center;
color: #e64e04;
width:100%;
height: 150px;
bottom: 0;
background-color: black;
@media (max-width: 768px) {
    height: 100px;
}
`

export const FourthSectionContainer = styled(Container)`
background-color: white;
flex-direction: row;
min-height: 80vh;
@media(max-width: 968px) {
    flex-direction: column
}

`

export const AboutUsContainer = styled(motion.div)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
font-style: italic;
width: 50vw;
max-width: 600px;
font-size: 1.1rem;
@media(max-width:968px ) {
    width: 100%;
    padding: 10px;
    > h1 {
        font-size: 2.5rem
    }
    > p {
        font-size: 0.8rem
    }
} 
`

interface IContactFormContainer {
    shadow: boolean
}

export const ContactFormContainer = styled(motion.div)<IContactFormContainer>`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
font-style: italic;
padding: 15px;
width: 40vw;
max-width:450px;
font-size: 1.1rem;
color:  #e64e04;
margin-left: 50px;
perspective: 1000px;
>form {
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    padding: 20px 30px;
    border-radius: 25px;
    box-shadow: ${props => props.shadow? `3px 3px 6px rgba(0,0,0,0.4)`: 'none'};
    > h2 {
        font-weight: bold;
    }
};
@media(max-width:968px ) {
    margin: 50px 0 80px 0;
    width: 100%;
} 
> form > h6 {
    color: black;
    margin-top: 20px;
    cursor: default;
}
`
export const Container404 = styled(Container)`
padding:100px;
text-align: center;
@media (max-width: 768px) {
    flex-direction: column;
    padding: 30px 5px;
    >h1 {
        font-size: 6.5rem;
    }
}
`

export const EventCarouselContainer = styled(motion.div)`
width:100%;
height: 50%;
display: flex;
justify-content: center;
align-items: center;
@media (min-width: 1100px) {
    height: 600px;
}

`
export const EventCarouselItem = styled(motion.div)`
display: flex;
width: 100%;
height: 50vh;
background-position: center;
background-size: cover;
@media (min-width: 1100px) {
    height: 600px;
}
`


export const EventMainContentContainer = styled(Container)`
flex-direction: column;
background-color: white;
width: 100%;
text-align: center;
height: fit-content;
@media (min-width: 858px) {
    max-width:860px;
    margin-top: 100px;
    
}
@media (min-width: 1100px) {
    flex-direction: row;
    max-width: 1300px;
    width: 100%;
    height: 600px;
    box-shadow: 3px 3px 6px rgba(0,0,0,0.2);    
    margin-top: 200px;
}
@media (min-width: 1500px) {
    height: 600px;
    width:80%;
}
`

export const EventPageContainer = styled(Container)`


> h1 {
    margin: 0 0 40px 0;
    color: #e64e04;
    font-size: 2.5rem;
    font-weight: bold;
    font-style: italic;
}
`

export const EventTextContainer = styled(motion.div)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-style: italic;
width: 100%;
max-width: 58ch;
height: 100%;
>div  {
    display: flex;
    flex-direction: column;
    height: auto;
    > h1 {
        text-align: center;
        margin: 0 0 20px 0;
        color: #e64e04;
        font-size: 2rem;
        font-weight: bold;
        font-style: italic;
    }
    > span {
        align-self: flex-start;
        font-weight: bold;
        > span {
            font-weight: normal;
        }
}
}
padding: 40px;
`


export const PortfolioContainer = styled(motion.div)`
display: grid;
width: 100%;
grid-template-columns: repeat(3, 1fr);
@media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
}
`

export const PortfolioPageContainer = styled(Container)`
> h1 {
    color: white;
    align-self: flex-start;
    font-weight: bold;
    font-style: italic;
    margin: 0 0 60px 60px;
    &:after {
    display: block;
    width:100px;
    height: 3px;
    content: '';
    background-color: #c7a36f;
}
}
`

export const ContactsContainer = styled(motion.div)`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
text-align: center;
font-style: italic;
margin-top: 35px;
height: 100%;
max-width:80%;
> h1 {
    color: #e64e04;
    font-weight: bold;
}


`



export const ContactPageBodyContainer = styled(Container)`
flex-direction: row;
align-items: flex-start;

@media (max-width: 970px) {
    flex-direction: column;
    align-items: center;
}
`
export const EventView = styled(motion.div)`
display: grid;
grid-template-columns: repeat(3, 1fr);
width:80%;
grid-row-gap: 40px;
@media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
}
@media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    grid-row-gap: 0px;
}
`

export const EventViewContainer = styled(motion.div)`
display: flex;
box-sizing: border-box;
flex-direction: column;
justify-content: flex-start;
align-items: center;
text-align: center;
padding: 60px 0;
width: 100%;
height: 100vh;
overflow-y: scroll;
position: fixed;
top: 0;
left: 0;
z-index: 22;
background-color: whitesmoke;
@media (max-width:768px) {
    padding: 0
}
`

export const EventViewInnerContainer = styled(motion.div)`
width: 100%;
height: fit-content;
display: flex;
box-sizing: border-box;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
>h1 {
    color: #e64e04;
    font-size: 3.5rem;
    margin: 0 0 40px 10%;
    align-self: flex-start;
    font-weight: bold;
    font-style: italic;
}
`

export const PartyPageContainer = styled(Container)`
/* min-height: calc(100vh - 150px); */
height: fit-content;
overflow:hidden;
> h1 {
    align-self: flex-start;
    margin-left: 10%;
    font-weight: bold;
    font-style: italic;
    &:after {
    display: block;
    width:150px;
    height: 3px;
    content: '';
    background-color: #e64e04;
}
}

`

export const EventOptionContainer = styled(motion.div)`
position: relative;
color: rgba(0,0,0,0.2);
font-size: 3rem;
font-weight: bold;
font-style: italic;
margin-bottom: 40px;
cursor: pointer;
transition-duration: 1s;
> span {
    position: absolute;
    color: #e64e04;
    transition-duration: 1s;
}
&:hover {
    >span {
        transform: translate(10px, -20px);
    }
    transform: translate(10px, 10px);
}
`

export const EventAdditionalInfoContainer = styled.div`
margin: 120px 0;
display: flex;
box-sizing: border-box;
flex-direction: column;
justify-content: center;
align-items: center;
width: 95%;
max-width: 1100px;
>h1 {
    font-size: 2rem;
    font-style: italic;
    margin-bottom: 20px;
    align-self: flex-start;
    &:after {
    display: block;
    width:150px;
    height: 3px;
    content: '';
    background-color: #e64e04;
}
}
@media (max-width: 1100px) {
    width: 80%;
    margin: 40px 0;
}
`

export const EventCatalog = styled(motion.div)`
width: 100%;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-column-gap: 10px;
grid-row-gap: 20px;
@media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
}
@media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-column-gap: 0;
}
`

export const EventTypeCardsContainer = styled(motion.div)`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
flex-wrap: wrap;
padding: 60px 10px;
/* grid-template-columns: repeat(4, 1fr); */
@media (max-width: 768px) {
    padding: 10px 0;
}
`

export const PartyCardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width:100%;
min-height: 50vh;
`

export const PartyMainContentContainer = styled.div`
width:100%;
min-height: 40vh;
padding: 30px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
@media (max-width: 1000px) {
    flex-direction: column;
    padding: 30px 0;
}
`

export const PartyTextContainer = styled(motion.div)`
height:100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-style: italic;
max-width:58ch;
>h5 {
    align-self: flex-start;
    > span {
        font-weight: bolder;
    }
}
>h1 {
    margin-bottom: 20px;
    align-self: flex-start;
    color:#e64e04;
    font-weight: bold;
    &:after {
    display: block;
    width:150px;
    height: 3px;
    content: '';
    background-color: #e64e04;
}
}
@media (max-width:768px) {
    padding: 20px;
    > h1 {
        font-size: 2rem;
    }
}
`