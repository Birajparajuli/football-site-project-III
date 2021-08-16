import React, { Component } from 'react';
import ReactSlidy from 'react-slidy';
import '../css/components.css';
import Slider1 from '../img/slider/Slider1.png';
import Slider2 from '../img/slider/Slider2.png';
import Slider3 from '../img/slider/Slider3.png';
import Slider4 from '../img/slider/Slider4.png';
import 'react-slidy/lib/styles.css';


export default class ImgSlider extends Component {

    render() {
        return (
            <>
                <ReactSlidy itemsToPreload={4} infiniteLoop>
                    <img src={Slider1} alt="Img" className="slider-img" />
                    <img src={Slider2} alt="Img" className="slider-img" />
                    <img src={Slider3} alt="Img" className="slider-img" />
                    <img src={Slider4} alt="Img" className="slider-img" />

                </ReactSlidy>


            </>
        )

    }

}