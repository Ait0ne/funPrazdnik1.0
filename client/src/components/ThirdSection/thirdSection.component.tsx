import React from 'react';
import {useInView} from 'react-intersection-observer';

import { ThirdSectionContainer, InfoContainerBase} from '../../styles/containers/containers.styles';
import Circle from '../../assets/circle2.svg'
import PlacesIcon from '../../assets/places.svg';
import CateringIcon from '../../assets/catering.svg';
import DjIcon from '../../assets/dj.svg';
import PhotoIcon from '../../assets/photo.svg';
import PlotsIcon from '../../assets/plots.svg';
import SpeakerIcon from '../../assets/speaker.svg';
import InfoText from '../InfoText/infoText.component';
import Logo from '../../assets/logo.svg'
import {SectionTitle} from '../../styles/elements/elements.styles';
import {SectionVariants} from '../../framer/variants';
import {useWindowDimensions} from '../../hooks/useWindowDimensions.hook';


type Props = {}

const ThirdSection = React.forwardRef<HTMLDivElement, Props>((props, ref) =>  {
    const [sectionRef, inView] = useInView()
    const width = useWindowDimensions()
    const circleSize = width<1200 ? 400 : 550
    const iconSize = width< 1200&&width>900 ? 80 : 120
    const LogoSize = width< 1200 ? 60 : 80
    return (
        <ThirdSectionContainer 
        animate={inView? 'visible': 'hidden'}
        variants={SectionVariants}
        ref={sectionRef} 
        {...props}   
        top={'80px'} 
        height='100vh'
        >
            <SectionTitle ref={ref}>Что мы предлагаем?</SectionTitle>
            <Circle  className='circle-icon' width={`${circleSize}px`}/>
            <InfoContainerBase  >
                <Logo  width={LogoSize} height={LogoSize}/>
                <h1 style={{marginLeft: '10px'}}>FunPrazdnik</h1>
            </InfoContainerBase>
            <InfoText 
            h1='Площадки'
            p='Мы знаем классные, необычные и запоминающиеся места и поделимся ими с вами по секрету.'
            circleSize={circleSize/2}
            position={1}
            icon={<PlacesIcon  width={iconSize} height={iconSize} />}
            />
            <InfoText 
            h1='Кейтеринг'
            p='У нас можно заказать кейтеринг от 10 человек: банкет, фуршет и сладкий стол с разнообразным меню на любой вкус.'
            circleSize={circleSize/2}
            position={2}
            icon={<CateringIcon width={iconSize} height={iconSize} />}
            />
            <InfoText 
            h1='Dj'
            p='Вашим гостям не удастся просто отсидеться в укромном уголке — ноги сами выведут их на танцпол.'
            circleSize={circleSize/2}
            position={3}
            icon={<DjIcon width={iconSize} height={iconSize} />}
            />
            <InfoText 
            h1='Фото/Видео'
            p='У нас работают профессиональные фотографы и видеографы с самой лучшей техникой. Они позаботятся о том, чтобы у вас остались яркие и атмосферные воспоминания.'
            circleSize={circleSize/2}
            position={4}
            icon={<PhotoIcon width={iconSize} height={iconSize} />}
            />
            <InfoText 
            h1='Сценарии'
            p='Для каждого праздника создаётся особенный, ни на что не похожий план специально по Вашим запросам.'
            circleSize={circleSize/2}
            position={5}
            icon={<PlotsIcon width={iconSize} height={iconSize} />}
            />
            <InfoText 
            h1='Ведущие'
            p='Каждый из наших ведущих — профессионал в своей сфере. Их опыт проведения различных праздников идёт по возрастающей — от 5 до 15 лет.'
            circleSize={circleSize/2}
            position={6}
            icon={<SpeakerIcon width={iconSize} height={iconSize} />}
            />
        </ThirdSectionContainer>
    )
})

export default ThirdSection;