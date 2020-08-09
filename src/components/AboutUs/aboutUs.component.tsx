import React from 'react';
import {useInView} from 'react-intersection-observer';

import { AboutUsContainer } from '../../styles/containers/containers.styles';
import { Title } from '../../styles/elements/elements.styles';
import ClientGallery from '../ClientGallery/clientGallery.component';
import {AboutUsVariants} from '../../framer/variants';

const AboutUs: React.FC = () => {
    const [viewRef, inView] = useInView()
    return (
        <AboutUsContainer 
        animate={inView? 'visible': 'hidden'}
        variants={AboutUsVariants}
        ref={viewRef}
        >
            <Title >Почему именно мы?</Title>
            <p>
                <span style={{fontWeight: 700}}>МЫ</span> -  команда увлеченных людей, для которых дарить улыбки и радость стало смыслом жизни.
                И у нас за плечами много лет успешной работы по организации разного рода событий.
            </p>
            <p>
                У нас найдётся множество идей к торжествам любого рода, 
                День Рождения или юбилей, выпускной в школе или детском саду, 
                свадьба или годовщина любого важного для Вас памятного момента,
                <span style={{fontWeight: 700}}> МЫ</span> и наши партнеры возьмем на себя все заботы по организации.
            </p>
            <Title color='secondary' size='2.5rem'>Наши Клиенты:</Title>
            <ClientGallery/>
        </AboutUsContainer>
    )
}

export default AboutUs;