import React, { FC } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import { MenuIconContainer } from '../../styles/elements/elements.styles';

export interface MenuIconProps {
    open: Boolean,
    onClick: () => void
}



const MenuIcon : FC<MenuIconProps> = ({open, onClick}) => {
    return (
        <MenuIconContainer onClick={onClick} open={open} >
            <span></span>
            <span></span>
            <span></span>
                {/* <FontAwesomeIcon onClick={onClick} style={{cursor: 'pointer', zIndex: 21}} icon={open? faTimes : faBars} size='2x' color='#e64e04'/> */}
        </MenuIconContainer>
    )
}


export default MenuIcon;