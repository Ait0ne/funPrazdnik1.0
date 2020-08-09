import React from 'react';
import {motion} from 'framer-motion';

import { MenuContainer } from '../../styles/containers/containers.styles';
import { MenuList, Link } from '../../styles/elements/elements.styles';


interface MenuProps {
    toggleMenuHidden: () => void
}

const Menu: React.FC<MenuProps> = ({toggleMenuHidden}) => {

    return (
        <MenuContainer
        initial={{
        clipPath: 'circle(0% at 100% 0%)'}}
        animate={{
        clipPath:'circle(100% at 50% 50%)',     
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
          }}}
        exit={{clipPath: 'circle(0% at 100% 0%)',
        transition: {
            type: 'spring',
            stiffness: 20,
            restDelta: 2
          }}}
        >
            <MenuList

            >
                <motion.li 
                >
                    <Link onClick={toggleMenuHidden} activeStyle={{textDecoration: 'underline'}} exact to='/'>
    
                    <div>
                        <span>Главная</span>Главная
                    </div>
                    
                    </Link>
                </motion.li>
                <motion.li>
                    <Link onClick={toggleMenuHidden} activeStyle={{textDecoration: 'underline'}} exact to='/portfolio'>
                        <div>
                            <span>Истории</span>Истории
                        </div>
                    </Link>
                </motion.li>
                <motion.li 
                >
                    <Link onClick={toggleMenuHidden} activeStyle={{textDecoration: 'underline'}} exact to='/parties'>
    
                    <div>
                        <span>Услуги</span>Услуги
                    </div>
                    
                    </Link>
                </motion.li>
                <motion.li>
                    <Link onClick={toggleMenuHidden} activeStyle={{textDecoration: 'underline'}} exact to='/contacts'>
                        <div>
                            <span>Контакты</span>Контакты
                        </div>
                    </Link>
                </motion.li>
            </MenuList>
        </MenuContainer>
    )
} 

export default Menu