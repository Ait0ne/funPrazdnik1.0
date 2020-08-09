import React, {useEffect, useState, Fragment} from 'react';
import {useParams} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import {useInView} from 'react-intersection-observer';
import Fallback from '../components/Fallback/fallback.component';

import Event from'../components/Event/event.component';
import {
    EventPageContainer,
    EventCarouselContainer, 
    EventMainContentContainer, 
    EventTextContainer, 
    EventCarouselItem,
    EventAdditionalInfoContainer,
    EventCatalog
} from '../styles/containers/containers.styles';
import {API_URL} from '../api_config';
import {PageTransitionVariants, GalleryVariants} from '../framer/variants';
import {IParty} from './parties';

export interface EventProps {
    Title: string,
    Budget: number,
    Create: Date,
    Description: string,
    Gallery: [],
    GuestNumber: number,
    Duration: string,
    type: {
        title: string
    },
    
}


const PortfolioEventPage:React.FC = () => {
    const [event, setEvent] = useState<EventProps>()
    const [parties, setParties] = useState<IParty[]>()
    const {eventId} = useParams()
    const [additionalInfoRef, additionalInfoInView] = useInView()
    const [loading, setLoading] = useState(true)
    useEffect(()=> {
        if (parties) {
            setTimeout(() => setLoading(false), 500)
            
        }
    }, [parties])

    useEffect(() => {
        fetch(`${API_URL}/articles/${eventId}`)
        .then(response => response.json())
        .then(data => {
            setEvent(data)
            fetch(`${API_URL}/parties?categories.title=${data.type.title}&_limit=6`)
            .then(response => response.json())
            .then(data => {
                setParties(data)
            })
        })
        .catch(err => console.log('WHATT', err))
    }, [])

    return (
        <Fragment>
            {
            loading?
            <Fallback/>
            :
            <EventPageContainer 
            initial='initial'
            animate='animate'
            exit='exit'
            variants={PageTransitionVariants}
            color='white'  height='fit-content'>
                <EventMainContentContainer color='white'
                >
                    <EventCarouselContainer>
                        <Carousel controls={false}>
                            {
                                event?.Gallery.map((image:any, index:number) => {
                                    return (
                                        <CarouselItem key={index}>
                                            <EventCarouselItem style={{backgroundImage:`url(${image.url})`}}>
                                            </EventCarouselItem>
                                        </CarouselItem>
                                    )
                                })
                            }
                        </Carousel>
                    </EventCarouselContainer>
                    <EventTextContainer
                    >
                        <div>
                        <h1>{event?.Title}</h1>
                            <ReactMarkdown className='event-markdown'  source={event?.Description}/>
                            <span>Бюджет: <span>{event?.Budget} руб.</span></span>
                            <span>Количество гостей: <span>{event?.GuestNumber}</span></span>
                            <span>Продолжительность: <span>{event?.Duration}</span></span>
                        </div>
                    </EventTextContainer>
                </EventMainContentContainer>
                <EventAdditionalInfoContainer
                >
                    <h1>Мы также проводим:</h1>
                    <EventCatalog
                    animate={additionalInfoInView? 'visible': 'hidden'}
                    variants={GalleryVariants}
                    ref={additionalInfoRef}
                    >
                        {
                            parties?
                            parties.map((party, i) => {
                                return <Event key={i} party={party}/>
                            })
                            : null
                        }
                    </EventCatalog>
                </EventAdditionalInfoContainer>
            </EventPageContainer>
            }
        </Fragment>
    )
}


export default PortfolioEventPage;