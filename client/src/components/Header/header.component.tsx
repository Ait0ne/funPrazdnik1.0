import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import {Link} from 'react-router-dom';

import Logo from '../../assets/logo.svg';
import {HeaderContainer, NavigationContainer} from '../../styles/containers/containers.styles'
import MenuIcon from '../MenuIcon/menuIcon.component';
import Menu from '../Menu/menu.component';


const Header: React.FC = () => {
    const [isMenuShown, setIsMenuShown] = useState(false)

    const toggleMenuHidden = () => {
        setIsMenuShown(!isMenuShown)
    }

    return (
        <HeaderContainer>
            <NavigationContainer>
                <Link style={{cursor: 'pointer', zIndex:21 }} to ='/'>
                    <Logo />
                </Link>
                <MenuIcon open={isMenuShown} onClick={toggleMenuHidden}/>
                <AnimatePresence>
                {
                    isMenuShown? 
                    <Menu
                    toggleMenuHidden={toggleMenuHidden}
                    /> 
                    : null
                }
                </AnimatePresence>
            </NavigationContainer>
        </HeaderContainer>
    )
}

export default Header;