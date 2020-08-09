import React,{ useState, useRef } from 'react';
import {useInView} from 'react-intersection-observer';
import {motion} from 'framer-motion';

import {GalleryVariants} from '../../framer/variants';
import {ContactFormContainer} from '../../styles/containers/containers.styles';
import FormInput from '../Form-input/formInput.component';
import {FormButton} from '../../styles/buttons/buttons.styles';


export interface IContactForm {
    showContacts: boolean,
    title: string,
    shadow: boolean,
    animated: boolean
}


const ContactForm: React.FC<IContactForm> = ({showContacts, title, shadow, animated}) => {
    const [ name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const formRef = useRef<HTMLFormElement>(null)
    const [formViewRef, inView] = useInView()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target
        if (name==='name') {
            setName(value)
        } else if (name==='phone') {
            setPhone(value)
        }

    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    const stopAnimation = () => {
        formRef.current?.classList.remove('animated')
        formRef.current?.removeEventListener('animationiteration', stopAnimation)
    }
    
    const handleMouseEnter = () => {
        animated?
        formRef.current?.addEventListener('animationiteration', stopAnimation)
        : null
    }

    const hanldeMouseLeave = () => {
        animated?
        formRef.current?.classList.add('animated')
        :null
    }

    return (
        <ContactFormContainer 
        animate={inView ? 'visible': 'hidden'}
        initial='initial'
        variants={GalleryVariants}
        shadow={shadow}
        >
            <motion.form 
            onSubmit={handleSubmit}
            className={animated? 'animated' : ''}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={hanldeMouseLeave}
            ref={formRef}
            >
                <h2         ref={formViewRef}>{title}</h2>
                <FormInput
                type='text'
                name='name'
                value={name}
                handleChange={handleChange}
                label='Имя'
                required
                />
                <FormInput
                type='text'
                name='phone'
                value={phone}
                handleChange={handleChange}
                label='Контактный номер'
                required
                />
                <FormButton type='submit'>Заказать звонок</FormButton>
                {
                    showContacts?
                    <h6>Или звоните +7 (925) 631-39-69</h6>
                    :null
                }
            </motion.form>
        </ContactFormContainer>
    )
}

export default ContactForm;