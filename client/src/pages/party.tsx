import React, {useEffect, useState, Fragment} from 'react';
import {useParams} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import {useInView} from 'react-intersection-observer';

import Jumbotron from '../components/Jumbotron/jumbotron.components';
import {Container, PartyMainContentContainer, PartyTextContainer} from '../styles/containers/containers.styles';
import {IParty} from './parties';
import {PageTransitionVariants, AboutUsVariants} from '../framer/variants';
import {API_URL} from '../api_config';
import ContactForm from '../components/ContactForm/contactForm.component';
import Fallback from '../components/Fallback/fallback.component';

const PartyPage: React.FC = () => {
    const [party, setParty] = useState<IParty>()
    const {partyId} = useParams()
    const [ref, inView] = useInView()
    const [loading, setLoading] = useState(true)
    useEffect(()=> {
        if (party) {
            setTimeout(() => setLoading(false), 500)
            
        }
    }, [party])
    

    useEffect(()=> {
        fetch(`${API_URL}/parties/${partyId}`)
        .then(response => response.json())
        .then(data => setParty(data))
    }, [])

    return (
        <Fragment>
            {
            loading?
            <Fallback />
            :
            <Container 
            initial='initial'
            animate='animate'
            exit='exit'
            variants={PageTransitionVariants}
            color='white'
            
            >
                {
                    party?
                    <Jumbotron height='60vh' moreTextSpace={true} backgroundImageUrl={`${party.image.url}`} title={party.Title} subtitle={party.Subtitle}/>
                    :null
                }
                <PartyMainContentContainer>
                    <PartyTextContainer
                    ref={ref}
                    animate={inView? 'visible': 'hidden'}
                    variants={AboutUsVariants}
                    >
                        <h1>Что включено:</h1>
                        <ReactMarkdown className='party-text' source={party?.Included}/>
                        <h5><span>Цена: </span>от {party?.Price}</h5>
                    </PartyTextContainer>
                    <ContactForm title='Свяжитесь с нами' showContacts={true} shadow={true} animated={true} />
                </PartyMainContentContainer>
            </Container>
            }
        </Fragment>
    )
}

export default PartyPage;