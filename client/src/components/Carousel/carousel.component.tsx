import React, { FC } from 'react';
import CarouselBootstrap from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';

import { CarouselImg } from '../../styles/elements/elements.styles';
import { CarouselContainer } from '../../styles/containers/containers.styles';
import image1 from '../../assets/1.jpg';
import image2 from '../../assets/2.jpg';
import image3 from '../../assets/3.jpg';


const Carousel:FC = () => {
    const images: string[] = [image1, image2, image3]

    return (
        <CarouselContainer>
            <CarouselBootstrap
            controls={false}
            indicators={false}
            >
                {
                    images.map((image, i) => {
                        return (
                        <CarouselItem key={i}>
                            <CarouselImg style={{backgroundImage: `url(${image})`}} />
                        </CarouselItem>
                        )
                    }) 
                }

            </CarouselBootstrap>
            
        </CarouselContainer>
    )
}

export default Carousel;