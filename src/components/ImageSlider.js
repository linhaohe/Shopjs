import React, {useEffect, useState, useCallback } from 'react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

function ImageSlider({slides}){
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const delay = 5000;

    const nextSlide = useCallback(() => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }, [current, length])
    
    useEffect(()=>{
        const interval=setTimeout(()=>nextSlide(),delay);
        return ()=>{
            clearTimeout(interval);
        };
    },[current, nextSlide])


    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    };

    return (
        <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow"
                onClick={prevSlide}/>
            <FaArrowAltCircleRight className="right-arrow"
                onClick={nextSlide}/>
         {
            slides.map((slide, index) => {
                return (
                    <div className={
                            index === current ? 'slide active' : 'slide'
                        }
                        key={index}>
                        {
                        index === current ? (
                            <img src={
                                    slide.image
                                }
                                alt=''
                                className="image"/>
                        ) : ''
                    } </div>
                )
            })
        } </section>
    )
}

export default ImageSlider;
