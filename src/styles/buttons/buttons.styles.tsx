import styled from 'styled-components';
import DropdownButton from 'react-bootstrap/DropdownButton';

interface ActionButtonProps {
    primary?: boolean
}


export const Button = styled.button<ActionButtonProps>`
display: flex;
align-items: center;
justify-content: center;
width: 180px;
height: 60px;
padding: 5px;
background-color: ${props => props.primary ? '#e64e04': '#fdc501'};
color: ${props => props.primary ? '#ffffff': '#000000'};
border: none;
border-radius: 5px;
font-weight: bold;
font-size: 1.1rem;
&:focus {
    outline: none;
}
`

export const ActionButton = styled(Button)`
top: calc(85vh - 30px);
position: absolute;
@media (min-width: 768px) {
    right: 15vw;
}
`

export const ReturnButton = styled(Button)`
bottom: -30px;
padding: 10px;
z-index:1;
position: absolute;
`
export const FormButton = styled(Button)`
position: relative;
`

export const CustomDropdown = styled(DropdownButton)`
align-self: flex-end;
margin: 0 60px 30px 0;
> button {
    background-color: #e64e04!important;
    color: white!important;
    border: none!important;
    width: 140px;
    font-weight: bold;
    font-style: italic;
    box-shadow: none!important;

    &:after {
        color: black!important;
        border-top: .4em solid;
        border-right: .4em solid transparent;
        border-left: .4em solid transparent;
    }

}
`