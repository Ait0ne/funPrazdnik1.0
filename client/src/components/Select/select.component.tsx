import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons/faChevronDown';
import {motion, AnimatePresence} from 'framer-motion';

import ClickOutside from '../clickOutside/clickOutside.component';



const DropdownVariants = {
    initial: {
        scaleY: 0.1
    },
    visible: {
        scaleY:1,
        transition: {
            duration: 0.2
        },
    },
    hidden: {
        scaleY: 0.1,
        transition: {
            duration: 0.2
        },
    }
}


const SelectContainer = styled.div`
position: relative;
align-self: flex-end;
margin: 0 60px 20px 0;
font-style: italic;
> input {
    display: flex;
    justify-content:center;
    background-color: #e64e04;
    color: white;
    padding: 7px 7px 7px 15px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    width: 220px;
    font-style: italic;
}
> svg {
    position: absolute;
    top: 10px;
    right: 15px;
    cursor: pointer;
    color: black;
    &:hover {
        color: white;
    }
}
&:hover {
    > svg {
        color: white;
    }
}
`
const Dropdown = styled(motion.div)`
position: absolute;
z-index: 1;
width: 180px;
transform-origin: 0% 0%;
`
const Option = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: white;
padding: 5px;
width: 220px;
&:hover {
    background-color: #dbdbdb;
    cursor: pointer;
}
`

interface SelectProps {
    options: string[],
    onChange: React.Dispatch<React.SetStateAction<string>>
}

const Select: React.FC<SelectProps> = ({options, onChange}) => {
    const [currentOption, setCurrentOption] = useState(options[0])
    const [dropdownShown, setDropdownShown] = useState(false)
    const selectRef = useRef<HTMLDivElement>(null)




    const handleClick = (index:number) => {

        setCurrentOption(options[index])
        onChange(options[index])
    }



    const toggleDropDown = () => {
        setDropdownShown(!dropdownShown)
    }
    
    return (
        <SelectContainer ref={selectRef} onClick={toggleDropDown}>
            <input  type='text' value={currentOption} disabled/>
            <FontAwesomeIcon onClick={toggleDropDown} icon={faChevronDown}/>
            <AnimatePresence>
                {
                    dropdownShown?
                    <ClickOutside onChange={toggleDropDown}>
                        <Dropdown
                        initial='initial'
                        animate='visible'
                        exit='hidden'
                        variants={DropdownVariants}
                        >
                            {
                                options.map((option, index) => {
                                    return (
                                        <Option onClick={() => handleClick(index)} key={index}>
                                            <span>{option}</span>
                                        </Option>
                                    )
                                })
                            }
                        </Dropdown>
                    </ClickOutside>
                    :null
                }
            </AnimatePresence>
        </SelectContainer>
    )
}

export default Select;