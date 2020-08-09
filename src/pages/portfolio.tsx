import React, {useEffect, useState, Fragment} from 'react';

import Portfolio from '../components/Portfolio/portfolio.component';
import {PortfolioPageContainer} from '../styles/containers/containers.styles';
import {API_URL} from '../api_config';
import Select from '../components/Select/select.component';
import {EventProps} from './PortfolioEvent';
import Fallback from '../components/Fallback/fallback.component';

const PortfolioPage: React.FC = () => {
    const [articles, setArticles] = useState<EventProps[]>()
    const [sort, setSort] = useState('Все события')
    const [loading, setLoading] = useState(true)
    useEffect(()=> {
        fetch(`${API_URL}/articles`)
        .then(response => response.json())
        .then(data => {
            setArticles(data.slice(0,8))
        })
    }, [])

    useEffect(()=> {
        if (articles) {
            setTimeout(() => setLoading(false), 500)
            
        }
    }, [articles])
    let filteredArticles = articles?.filter((article) => {
        if (sort === 'Все события') {
            return article
        } else if (sort === 'Вечеринки') {
            return article.type.title==='Тематические Вечеринки'
        } else if (sort === 'Корпоративы') {
            return article.type.title==='Корпоративы'
        } else if (sort === 'Детские Праздники') {
            return article.type.title==='Детские Праздники'
        } else if (sort === 'Взрослые Праздники') {
            return article.type.title==='Взрослые Праздники'
        } else {
            return article
        } 
                
    })

    


    return (
        <Fragment>
            {
            loading?
            <Fallback/>
            :
            <PortfolioPageContainer
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{duration: 1}}
            height='90vh' top='120px'>
                <h1>Наши работы</h1>
                <Select onChange={setSort} options={['Все истории', 'Вечеринки','Взрослые Праздники','Детские Праздники', 'Корпоративы' ]} />
                <Portfolio articles={filteredArticles}/>
            </PortfolioPageContainer>
            }
        </Fragment>
    )
}

export default PortfolioPage;