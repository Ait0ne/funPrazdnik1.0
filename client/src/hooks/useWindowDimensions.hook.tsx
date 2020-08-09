import {useState, useEffect} from 'react';


export const useWindowDimensions = () =>   {
    const [width, setWidth] = useState(0)
    const changeDimensions = () => {
        setWidth(window.innerWidth)
    }
    useEffect(() => {
        changeDimensions()
        window.addEventListener('resize', changeDimensions)
        return () =>  window.removeEventListener('resize', changeDimensions)
    }, [])
    return width
}