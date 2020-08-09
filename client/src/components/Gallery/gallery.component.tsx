import React from 'react';
import { useInView } from 'react-intersection-observer';

import { GalleryContainer } from '../../styles/containers/containers.styles';
import GalleryItem from '../GalleryItem/galleryItem.component';
import { GalleryVariants } from '../../framer/variants';


export interface GalleryProps  {
    articles: any[],
} 

const Gallery: React.FC<GalleryProps> = ({articles}) => {
    const [ref, inView] = useInView()
    return (
        <GalleryContainer ref={ref}
        animate={inView? "visible": "hidden"}
        variants={GalleryVariants}
        >
            {   
                articles.length>0?
                articles.map(article => {
                    return <GalleryItem key={article.id} article={article}/>
                })
                : <p>Loading</p>
            }
        </GalleryContainer>
    )
}

export default Gallery;