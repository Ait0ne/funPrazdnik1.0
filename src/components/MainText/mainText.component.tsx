import React from 'react';

import { MainTextContainer } from '../../styles/containers/containers.styles';
import { BoldText } from '../../styles/elements/elements.styles';

const MainText: React.FC = () => {
    return(
        <MainTextContainer>
            <BoldText >У каждого события есть своя история</BoldText>
            <h2>И мы поможем ее рассказать</h2>
        </MainTextContainer>
    )
}

export default MainText;