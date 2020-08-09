import React from 'react';

import {PortfolioContainer} from '../../styles/containers/containers.styles';
import {EventProps} from '../../pages/portfolioEvent';
import GalleryItem from '../../components/GalleryItem/galleryItem.component';

export interface PortfolioProps {
    articles: EventProps[] | undefined
}


const Portfolio: React.FC<PortfolioProps> = ({articles}) => {

    return (
        <PortfolioContainer>
            {   articles?
                articles.map((article, index: number)=>{
                    return <GalleryItem key={index} article={article}/>
                })
                :null
            }
            
        </PortfolioContainer>
    )
}
export default Portfolio;