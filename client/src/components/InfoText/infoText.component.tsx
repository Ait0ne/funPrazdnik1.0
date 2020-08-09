import React, { Fragment } from 'react';


import { SectionVariants } from '../../framer/variants';
import { CircleInfoContainer, InfoTextContainer } from '../../styles/containers/containers.styles';

interface InfoTextProps {
    h1: string,
    p: string,
    position: number,
    circleSize: number,
    icon: any
}

const InfoText: React.FC<InfoTextProps> = ({h1, p, position, circleSize, icon}) => {

    return (
        <Fragment>
            <CircleInfoContainer 
            circleSize={circleSize} 
            position={position}

            variants={SectionVariants}
            >
                    {icon}
            </CircleInfoContainer>
            <InfoTextContainer  
            circleSize={circleSize} 
            position={position}
            variants={SectionVariants}
            >
                <h1>{h1}</h1>
                <p>{p}</p>
            </InfoTextContainer>
        </Fragment>
    )
}

export default InfoText;