import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight';

import {CardContainer, CardImage, CardBodyContainer,CardFloatingButton} from './card.styles';

export interface ICard {
    title: string;
    bodyText: string;
    imageUrl: any;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}


const Card: React.FC<ICard> = ({title, bodyText, imageUrl, onClick}) => {
    return (
        <CardContainer
        onClick={onClick}
        >
            <CardImage src={imageUrl} alt='card' />
            <CardBodyContainer>
                <CardFloatingButton>
                    <FontAwesomeIcon icon={faChevronRight}/>
                </CardFloatingButton>
                <h3>{title}</h3>
                <p>{bodyText}</p>
            </CardBodyContainer>
        </CardContainer>
    )
}

export default Card;