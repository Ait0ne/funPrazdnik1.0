import React, {useEffect, useRef} from 'react';

interface ClickOutsideProps {
    children: React.ReactNode,
    onChange: () => void
}

const ClickOutside: React.FC<ClickOutsideProps> = ({children, onChange}) => {
    const ref = useRef<HTMLDivElement>(null)

    const handleClick = (event: any) => {
        if (!ref.current?.contains(event.target)) {
            onChange()
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClick)
        return () => document.removeEventListener('click', handleClick)
    })
    
    
    return (
        <div ref={ref}>
            {children}
        </div>
    )
}

export default ClickOutside;