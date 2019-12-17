import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import '../style/Home.css';
import img1 from '../Image/1.png';
import img2 from '../Image/2.png';
import img3 from '../Image/3.png';
import img4 from '../Image/4.png';
import img5 from '../Image/5.png';
import img6 from '../Image/6.png';
import img7 from '../Image/7.png';
import img8 from '../Image/8.png';


class Img extends React.Component
{
    render()
    {
        const params = {

            effect: 'cube',
            grabCursor: true,
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 30,
                shadowScale: 0.94,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

        }

        return (
            <div className="animeImage">
                <Swiper {...params}>
                    <div className="swiper-slide"><a href="http://skyhouse-bsdcity.id/" target="_blank"><img src={img1} alt="img" style={{ width: "300px", height: "300px" }} /></a></div>
                    <div className="swiper-slide"><a href="http://amigos.co.id/" target="_blank"><img src={img2} alt="img" style={{ width: "300px", height: "300px" }} /></a></div>
                    <div className="swiper-slide"><a href="https://sandikoprastyo.github.io/conakito/" target="_blank"><img src={img3} alt="img" style={{ width: "300px", height: "300px" }} /></a></div>
                    <div className="swiper-slide"><a href="https://sandikoprastyo.github.io/Cloning-Zalora-Frontpage/" target="_blank"><img src={img4} alt="img" style={{ width: "300px", height: "300px" }} /></a></div>
                    <div className="swiper-slide"><a href="https://sandikoprastyo.github.io/Babastudio-exercis-3/" target="_blank"><img src={img5} alt="img" style={{ width: "300px", height: "300px" }} /></a></div>
                    <div className="swiper-slide"><a href="https://sandikoprastyo.github.io/DevC-Exercise3/" target="_blank"><img src={img6} alt="img" style={{ width: "300px", height: "300px" }} /></a></div>
                    <div className="swiper-slide"><a href="https://sandikoprastyo.github.io/Todolist/" target="_blank"><img src={img7} alt="img" style={{ width: "300px", height: "300px" }} /></a></div>
                    <div className="swiper-slide"><a href="https://sandikoprastyo.github.io/indiehouse" target="_blank"><img src={img8} alt="img" style={{ width: "300px", height: "300px" }} /></a></div>
                </Swiper >

            </div>
        )
    }
}



export default Img;