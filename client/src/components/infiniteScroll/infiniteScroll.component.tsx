import React, {useState, Fragment, useEffect} from 'react';
import './infiniteScroll.styles.css'


interface InfiniteScrollProps {
    images: any
}


const xMove = 20
const xAlign = 20






const InfiniteScroll: React.FC<InfiniteScrollProps> =({images}) => {
    const currentImages = images.slice(0,5)
    const [x, setX] = useState(-20)
    const [start, setStart] = useState(0)
    const [end,setEnd] = useState(4)
    const [transition, setTransition] = useState('1s')
    const [calledLeft, setCalledLeft] = useState(false)

    useEffect(() => {
        const timer = setInterval(()=> {
            handleLeft()
        }, 5000)
        return () => clearInterval(timer)
    })

    const handleLeft = () => {
            if (!calledLeft) {
            setCalledLeft(true)
            if (start===images.length-1){
                setStart(0)
                } else {
                    setStart(start+1)
                }
                if(end===images.length-1){
                    setEnd(0)
                } else{
                    setEnd(end+1)    
                }
            const slider = document.getElementsByClassName('slider')[0]
            const moveSliderLeft = () => {
                const firstNode = document.getElementsByClassName('slide-custom')[1]
                const img:any = firstNode.getElementsByClassName('slide-image')[0]
                img.src=images[end===images.length-1 ? 0 : end+1]
                slider.appendChild(firstNode)
                setTransition('none')
                setX(-xMove)
                setTimeout(() => {
                    setTransition('all 0.5s')  
                    setCalledLeft(false)
                })
                slider.removeEventListener('transitionend', moveSliderLeft)
            }
            slider.addEventListener('transitionend', moveSliderLeft);      
            setX(x-xAlign)
        }
    }

    return (
        <Fragment>

                    <div className='carousel-container'>
                        <div className='carousel-custom'>
                            <div className='slider' style={{display:'flex', flexDirection:'row',transform:`translateX(${x}%)`, transition:transition}}>                        
                                {currentImages.map((img:any,index:number) => 
                                    <div key ={index}  className='slide-custom'>
                                        <img  className='slide-image'  src={img} alt='client'/>
                                    </div>
                                    )
                                    }                      
                            </div>
                        </div>
                    </div> 
             
        </Fragment>
    )
}




export default InfiniteScroll;