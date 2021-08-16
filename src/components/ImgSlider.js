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
                <ReactSlidy itemsToPreload={4}>
                    <img src={Slider1} />
                    <img src={Slider2} />
                    <img src={Slider3} />
                    <img src={Slider4} />

                </ReactSlidy>
            </>
        )

    }

}