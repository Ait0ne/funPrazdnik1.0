import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronUp} from '@fortawesome/free-solid-svg-icons';

import { FourthSectionContainer } from '../../styles/containers/containers.styles';
import ContactForm from '../ContactForm/contactForm.component';
import AboutUs from '../AboutUs/aboutUs.component';
import { ReturnButton } from '../../styles/buttons/buttons.styles';


const FourthSection: React.FC = () => {
    const handleClick = () => {
        window.scrollTo({
            top: 0
        })
    }
    return (
        <FourthSectionContainer>
            <AboutUs/>
            <ContactForm title='Связаться с нами' showContacts={true} shadow={true} animated={true}/>
            <ReturnButton onClick={handleClick} primary>В начало страницы<FontAwesomeIcon icon={faChevronUp}/></ReturnButton>
        </FourthSectionContainer>
    )
}

export default FourthSection;