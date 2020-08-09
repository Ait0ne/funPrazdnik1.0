import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


import {PriceFormContainer, PriceContainer, BestPriceContainer, PriceTitle, BestPriceBadge} from './priceForm.styles';

const PriceForm = () => {
    return (
        <PriceFormContainer>
            <PriceContainer>
                <PriceTitle>
                    <h2>Минимальная</h2>
                    <span>от 50 000руб.</span>
                </PriceTitle>
                <span><FontAwesomeIcon icon={faCheck} color='#e64e04'/>Персональный менеджер</span>
                <span><FontAwesomeIcon icon={faCheck}/>Сценарий и реквизит</span>
                <span><FontAwesomeIcon icon={faCheck}/>Ведущий</span>
                <span><FontAwesomeIcon icon={faCheck}/>Dj</span>
            </PriceContainer>
            <BestPriceContainer>
                <BestPriceBadge>
                    <FontAwesomeIcon icon={faCheck} color='#ffffff'/>
                </BestPriceBadge>   
                <PriceTitle>
                    <h2>Под Ключ</h2>
                    <span>от 300 000руб.</span>
                </PriceTitle>
                <span><FontAwesomeIcon icon={faCheck} color='#e64e04'/>Персональный менеджер</span>
                <span><FontAwesomeIcon icon={faCheck}/>Сценарий и реквизит</span>
                <span><FontAwesomeIcon icon={faCheck}/>Ведущий</span>
                <span><FontAwesomeIcon icon={faCheck}/>Dj</span>
                <span><FontAwesomeIcon icon={faCheck}/>Мастер-классы и шоу программы</span>
                <span><FontAwesomeIcon icon={faCheck}/>Фото-Видео</span>
                <span><FontAwesomeIcon icon={faCheck}/>Декор-помещения</span>
                <span><FontAwesomeIcon icon={faCheck}/>Кейтеринг</span>
            </BestPriceContainer>
            <PriceContainer>
                <PriceTitle>
                    <h2>Расширенная</h2>
                    <span>от 100 000руб.</span>
                </PriceTitle>
                <span><FontAwesomeIcon icon={faCheck} color='#e64e04'/>Персональный менеджер</span>
                <span><FontAwesomeIcon icon={faCheck}/>Сценарий и реквизит</span>
                <span><FontAwesomeIcon icon={faCheck}/>Ведущий</span>
                <span><FontAwesomeIcon icon={faCheck}/>Dj</span>
                <span><FontAwesomeIcon icon={faCheck}/>Мастер-классы и шоу программы</span>
            </PriceContainer>
        </PriceFormContainer>
    )
}

export default PriceForm;