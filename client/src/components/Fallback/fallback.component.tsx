import React from 'react'

import {FallbackContainer, FallbackContainerInner} from './fallback.styles';
import Logo from '../../assets/logo.svg';
import {useWindowDimensions} from '../../hooks/useWindowDimensions.hook';

const Fallback: React.FC = () => {
    const width=useWindowDimensions()
    const logoSize = width>768 ? '50px' : '80px'
    return (
        <FallbackContainer
        initial={{opacity:0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.3}}
        >
            <FallbackContainerInner  >
                <Logo width={logoSize} height={logoSize} />
                <h1 style={{marginLeft: '10px'}}>FunPrazdnik</h1>
            </FallbackContainerInner>
        </FallbackContainer>
    )
}

export default Fallback;