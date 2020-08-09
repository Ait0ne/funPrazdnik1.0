import React from 'react';
import {Link} from 'react-router-dom';

import {IParty}  from '../../pages/parties'
import {EventContainer, ImageContainer, EventInfoContainer} from './event.styles'
import {Button} from '../../styles/buttons/buttons.styles';
import {EventItemVariants} from '../../framer/variants'; 

export interface IEvent {
    party: IParty
}




const Event: React.FC<IEvent> = ({party}) => {
    return (
        <EventContainer
        variants={EventItemVariants}
        >
            <ImageContainer style={{backgroundImage: `url(${party.image.formats.small.url})`}}
            >
                <div>
                    <span>{party.Title}</span>
                </div>
            </ImageContainer>
            <EventInfoContainer
            >
                <p>{party.Description}</p>
                <span><span>Цена:</span> от {party.Price}</span>
                <Link to={`/parties/${party.id}`}>
                    <Button>Подробнее</Button>
                </Link>
            </EventInfoContainer>
        </EventContainer>
    )
} 


export default Event;