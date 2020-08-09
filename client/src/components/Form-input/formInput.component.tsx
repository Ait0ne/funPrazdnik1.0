import React from 'react';

import './form-input.styles.scss';

interface FormInputProps extends React.HTMLProps<HTMLInputElement> {
    handleChange: (event:React.ChangeEvent<HTMLInputElement>) => void ,
    label: string,
    value: string 
}

const FormInput:React.FC<FormInputProps> = ({handleChange, label, value, ...otherProps}) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} value={value} {...otherProps}/>
        {
            label ?
            (<label className={`${value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </label>)
            : null
        }
    </div>
)

export default FormInput;