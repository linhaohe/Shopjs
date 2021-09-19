import React from 'react';
import Navbar from '../components/Navbar';
import ImageSlider from '../components/ImageSlider';
import {SliderData} from '../components/assets/Slidedata.js';

function HomePage(){
    return (<div>
        <Navbar />
        <ImageSlider slides={SliderData}/>
    </div>)
}

export default HomePage;