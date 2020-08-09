import React from 'react';
import {Link} from 'react-router-dom';

import {PageTransitionVariants} from '../framer/variants';
import Icon404 from '../assets/404.jpg'; 
import {Container404, Container} from '../styles/containers/containers.styles';
import { Title, Image404} from '../styles/elements/elements.styles';
import {Button} from '../styles/buttons/buttons.styles';

const PageNotFound: React.FC = () => {
    return (
        <Container404 
        initial='initial'
        animate='animate'
        exit='exit'
        variants={PageTransitionVariants}
        height='100vh' color='white' direction='row'>
            <Container color='white' height='80%'>
                <Title size='10.5rem' color='primary'  >
                    404
                </Title>
                <p>
                    <h2>Кажется вы потерялись</h2>
                </p>
                <Link to='/'>
                    <Button primary>Вернуться Домой</Button>
                </Link>
            </Container>
            <Image404 src={Icon404}/>
        </Container404>
    )
}

export default PageNotFound;