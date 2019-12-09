import React, { Component } from 'react';
import '../style/Home.css';
import Img from './Img';
import 'swiper/css/swiper.css';


class Work extends Component
{
    render()
    {

        return (
            <div className="App">
                <div className="title">
                    <h1>Work</h1>
                </div>
                <div className="swiper-container">
                    <div class="swiper-wrapper">
                        <Img />
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        );
    }
}

export default Work;


