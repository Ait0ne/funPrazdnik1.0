import React, {useState, useEffect, Fragment} from 'react';
import {AnimatePresence} from 'framer-motion';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import AdultPartyImage from '../assets/AdultParty.jpg';
import ThemePartyImage from '../assets/themeParty.jpeg';
import AdultBirthdayImage from '../assets/AdultPartySmall.jpg';
import KidsPartyImage from '../assets/KidsParty.jpg';
import CorporatePartyImage from '../assets/corporateEvent.jpg'
import Event from '../components/Event/event.component';
import {
    PartyPageContainer, 
    EventViewContainer, 
    EventView, 
    EventViewInnerContainer,
    EventTypeCardsContainer,
    PartyCardContainer
} from '../styles/containers/containers.styles';
import {API_URL} from '../api_config'
import {EventViewVariants, PageTransitionVariants} from '../framer/variants';
import {CustomIcon} from '../styles/elements/elements.styles';
import PriceForm from '../components/PriceForm/priceForm.component';
import Jumbotron from '../components/Jumbotron/jumbotron.components';
import Card from '../components/Card/card.component';
import Fallback from '../components/Fallback/fallback.component';


export interface IParty {
    id:number;
    Title: string,
    Subtitle:string,
    Included:string;
    Description: string,
    image: any,
    type: string,
    Price: string,
    categories: any[],
}


const PartiesPage: React.FC = () => {
    const [parties, setParties]  = useState<IParty[]>()
    const [filter, setFilter] = useState('')
    const [eventsShown, setEventsShown] = useState(false)
    const [loading, setLoading] = useState(true)
    useEffect(()=> {
        if (parties) {
            setTimeout(() => setLoading(false), 500)
            
        }
    }, [parties])

    useEffect(()=> {
        fetch(`${API_URL}/parties`)
        .then(response => response.json())
        .then(data => setParties(data))
        .catch(err => console.log(err))
    }, [])

    useEffect(()=> {
        return handleEventsClose
    },[])

    const handleClick = (f:string) => {
        setFilter(f)
        document.body.style.overflowY='hidden'
        setEventsShown(!eventsShown)
    }
    const filteredParties = parties?.filter((party) => {
        const result =  party.categories.filter((category) => {
            return category.title===filter 
        })
        return result.length>0
        
    })
    
    const handleEventsClose = () => {
        document.body.style.overflowY='auto'
        setEventsShown(false)
    }


    return (
        <Fragment>
            {
                loading?
                <Fallback/>
                :
                <PartyPageContainer  color='white' 
                initial='initial'
                animate='animate'
                exit='exit'
                variants={PageTransitionVariants}
                height='fit-content'
                >
                    <Jumbotron 
                    backgroundImageUrl={AdultPartyImage} 
                    title='Воплотим любые идеи'
                    subtitle='Чем безумнее, тем лучше'
                    />
                    <PartyCardContainer>
                        <EventTypeCardsContainer>
                            <Card onClick={() => handleClick('Тематические Вечеринки')}
                            imageUrl={ThemePartyImage}
                            title='Тематические Вечеринки'
                            bodyText='Сделаем любое событие ярким и запоминающимся переместив Вас в другой мир.'
                            />
                            <Card onClick={() => handleClick('Взрослые Праздники')}
                            imageUrl={AdultBirthdayImage}
                            title='Взрослые Праздники'
                            bodyText='Приближается День Рождения или Юбилей? Мы поможем сделать этот день незабываемым.'
                            />
                            <Card onClick={() => handleClick('Детские Праздники')}
                            imageUrl={KidsPartyImage}
                            title='Детские Праздники'
                            bodyText='Хотите порадовать ребенка, устроив для него необычный Праздник? У нас полно идей на такой случай.'
                            />
                            <Card onClick={() => handleClick('Корпоративы')}
                            imageUrl={CorporatePartyImage}
                            title='Корпоративы'
                            bodyText='Оказываем любые услуги, связанные с корпоративами. Пишем оригинальные сценарии под ваши требования и предпочтения.'
                            />

                        </EventTypeCardsContainer>
                    </PartyCardContainer>
                    
                    <AnimatePresence>
                        {
                            eventsShown?
                            <EventViewContainer
                            initial='hidden'
                            animate='visible'
                            exit='hidden'
                            transition={{duration: 1}}
                            variants={EventViewVariants}
                            >
                                <EventViewInnerContainer>
                                <CustomIcon onClick={handleEventsClose} icon={faTimes} color='#e64e04' size='3x'/>
                                    <EventView>
                                    { filteredParties?
                                    filteredParties.map((party, i) => {
                                            return ( 
                                            
                                                <Event key={i} party={party}/>
                                            
                                            )
                                        })
                                    :null
                                    }
                                    </EventView>
                                </EventViewInnerContainer>
                            </EventViewContainer>
                            : null
                        }
                    </AnimatePresence>
                    <h1>Готовые Программы</h1>
                    <PriceForm/>
                </PartyPageContainer>
            }
        </Fragment>
    )
}

export default PartiesPage;

