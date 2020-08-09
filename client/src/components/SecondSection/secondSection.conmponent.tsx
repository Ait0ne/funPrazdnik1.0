import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

import { Container } from '../../styles/containers/containers.styles';
import {API_URL} from '../../api_config';
import Gallery from '../Gallery/gallery.component';
import { BoldText } from '../../styles/elements/elements.styles';
import styled from 'styled-components';


const CustomBoldText = styled(BoldText)`
margin-left: 10vw;
margin-bottom: 70px;
align-self: flex-start;
cursor: pointer;
> a {color: white;}
`

const SecondSection: React.FC = () => {
    const [articles, setArticles] = useState([])
    
    useEffect(()=> {
        fetch(`${API_URL}/articles`)
        .then(response => response.json())
        .then(data => {
            setArticles(data.slice(0,8))
        })
    }, [])

    return (
        <Container direction='column' top={'15vh'}>
            <CustomBoldText size='2rem'>
                <Link to='/portfolio'>
                    Наши истории
                </Link>
            </CustomBoldText>
            <Gallery articles={articles}/>
        </Container>
    )
}

export default SecondSection;