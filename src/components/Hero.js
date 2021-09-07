import React, {useEffect, useState, useRef} from 'react'

import { ArrowRightCircle,ArrowLeftCircle } from 'react-feather';

const Hero = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length =slides.length;
    const timeout = useRef(null);
    
    useEffect(() => {
        const nextSlide = ()=>{
            setCurrent (current => (current===length-1?0:current+1))
        }
       
        timeout.current= setTimeout(nextSlide, 2000);
        return function(){
            if(timeout.current){
                clearTimeout(timeout.current)
            }
            
        }
    }, [current, length])
    const nextSlide=()=>{
        if(timeout.current){
            clearTimeout(timeout.current)
        }
        setCurrent(current===length-1?0:current+1);
        console.log(current);
    }
    const prevSlide = ()=>{
        if(timeout.current){
            clearTimeout(timeout.current)
        }
        setCurrent(current ===0?length-1:current-1);
        console.log(current);
    }

    if(!Array.isArray(slides)||slides.length<=0){
        return null;
    }
    return (
        <div className="heroSection">
        <div className="heroWrapper">
            {slides.map((slide, index)=>{
                return(
                <div key ={index} className="heroSlide">
                    {index===current &&(
                        <div className="heroSlider">
                        <div className="heroImage">
                            <img src={slide.image} alt={slide.alt}  />
                        </div>
                        <div className="heroContent">
                            <h1>{slide.title}</h1>
                            <p>{slide.price}</p>
                            <button className="btn btn-hero" to ={slide.path}>{slide.label}</button>
                        </div>
                    </div>
                    )}
                    
                </div>
                )
            })}
            <div className="sliderButtons">
                <div className="prevArrow " onClick={prevSlide}>
                    <ArrowLeftCircle className="arrow"/>
                </div>
                <div className="nextArrow" onClick={nextSlide}>
                    <ArrowRightCircle className="arrow"/>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Hero