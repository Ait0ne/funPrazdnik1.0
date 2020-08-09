import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons/faChevronDown';

import Carousel from '../Carousel/carousel.component';
import MainText from '../MainText/mainText.component';
import { Container } from '../../styles/containers/containers.styles';
import { ActionButton }  from '../../styles/buttons/buttons.styles';

interface FirstSection {
    scroll: () => void
}

const FirstSection: React.FC<FirstSection> = ({scroll}) => {
    
    return (
        <Container>
            <Carousel/>
            <MainText/>
            <ActionButton onClick={scroll} primary={true}>
                Узнайте о нас больше
                <FontAwesomeIcon icon={faChevronDown}/>
            </ActionButton>
        </Container>
    )
}

export default FirstSection;