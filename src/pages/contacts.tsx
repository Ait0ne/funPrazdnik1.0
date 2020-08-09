import React from 'react';
import {useInView} from 'react-intersection-observer';


import {AboutUsVariants, PageTransitionVariants} from '../framer/variants'
import {Container,ContactPageBodyContainer, ContactsContainer} from '../styles/containers/containers.styles';
import ContactImage from '../assets/contacts.jpg';
import ContactForm from '../components/ContactForm/contactForm.component'
import Jumbotron from '../components/Jumbotron/jumbotron.components';

const ContactsPage: React.FC = () => {
    const [ref, inView] = useInView()
    return (
        <Container 
        initial='initial'
        animate='animate'
        exit='exit'
        variants={PageTransitionVariants}
        height='auto'>
            <Jumbotron 
            backgroundImageUrl={ContactImage} 
            title='Свяжитесь с нами' 
            subtitle='И мы расскажем вашу историю'
            />
            <ContactPageBodyContainer color='white' height='50vh'>
                <ContactsContainer
                ref={ref}
                initial='initial'
                animate={inView? 'visible': 'hidden'}
                variants={AboutUsVariants}
                >
                    <h1>Наши контакты</h1>
                        <p>Работаем ежедневно с 10-00 до 22-00</p>
                        <p>Наш телефон: +7 (925) 631-39-69</p>
                        <p>Почта: info@funprazdnik.ru</p>
                        <p>Организуем мероприятия как в Москве, так и в области.</p>
                </ContactsContainer>
                <ContactForm title='Или оставьте Ваш телефон и мы вам перезвоним' showContacts={false} shadow={false} animated={false}/>
            </ContactPageBodyContainer>
        </Container>
    )
} 

export default ContactsPage;