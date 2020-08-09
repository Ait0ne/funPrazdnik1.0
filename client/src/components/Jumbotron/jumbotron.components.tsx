import React from 'react';

import {JumbotronBackgroundImage, JumbotronTitleContainer, JumbotronContainer} from './jumbotron.styles';

export interface IJumbotron {
    backgroundImageUrl: string,
    title: string,
    subtitle?: string,
    height? : string,
    moreTextSpace?: boolean
}

const Jumbotron: React.FC<IJumbotron> = ({backgroundImageUrl, title, subtitle, height, moreTextSpace}) => {
    return (
        <JumbotronContainer moreTextSpace={moreTextSpace} height={height}>
            <JumbotronBackgroundImage style={{backgroundImage: `url(${backgroundImageUrl})`}}>
            </JumbotronBackgroundImage>
            <JumbotronTitleContainer moreTextSpace={moreTextSpace}>
                <span>
                    <h1>{title}</h1>
                    {
                        subtitle?
                            <div>{subtitle}</div>
                        : null
                    }
                </span>
            </JumbotronTitleContainer>
        </JumbotronContainer>
    )
}

export default Jumbotron;