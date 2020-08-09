import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import {Link} from 'react-router-dom';

import { GalleryItemContainer, BackgroundImageContainer, GalleryItemInfo } from '../../styles/containers/containers.styles';
// import { API_URL } from '../../api_config';
import { GalleryVariants } from '../../framer/variants';

export interface GalleryItemProps {
    article: any
}

const GalleryItem: React.FC<GalleryItemProps> = ({article}) =>{
    const [hover, setHover] = useState(false);
    const onMouseEnter = () => {
        setHover(true)
    }

    const onMouseLeave = () => {
        setHover(false)
    }

    return (
        <Link to={`/portfolio/${article.id}`}>
        <GalleryItemContainer 
        variants={GalleryVariants}
        onMouseEnter={onMouseEnter} 
        onMouseLeave={onMouseLeave} 
        
        >
            <BackgroundImageContainer style={{backgroundImage: `url(${article.Images[0].url})`}} hover={hover}>
            </BackgroundImageContainer>
            <AnimatePresence>
            {
                hover?
                <GalleryItemInfo
                initial={{x:-50, opacity:0}}
                animate={{opacity: 1, x: 0}}
                exit={{x:-50, opacity:0}}
                transition={{duration: 0.8}}
                >
                        {
                            article.Title
                        }
                </GalleryItemInfo>
                : null
            }
            </AnimatePresence>
        </GalleryItemContainer>
        </Link>
    )
}

export default GalleryItem;