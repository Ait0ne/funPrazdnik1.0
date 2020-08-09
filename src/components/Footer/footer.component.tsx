import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCopyright} from '@fortawesome/free-solid-svg-icons';


import {FooterContainer} from '../../styles/containers/containers.styles';


const Footer: React.FC = () => {
    

    return (
        <FooterContainer>
            
            <div>
                <FontAwesomeIcon icon={faCopyright}/>
                <span>FunPrazdnik.ru | Все права защищены</span>
            </div>
        </FooterContainer>
    )
}

export default Footer;