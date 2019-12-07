import React, { Component } from 'react';
import '../style/Home.css';
import 'react-circular-progressbar/dist/styles.css';
import RoundHtml from './CompSkill/RoundHtml';
import RoundJs from './CompSkill/RoundJs';
import RoundCss from './CompSkill/RoundCss';
import RoundBootsrap from './CompSkill/RoundBootsrap';
import RoundSass from './CompSkill/RoundSass';
import RoundReactJs from './CompSkill/RoundReactJs';


class Skill extends Component
{
    render()
    {
        return (
            <div className="App">
                <div className="title">
                    <h1>Skill</h1>
                </div>
                <div className="intro" style={{display: "flex"}}>

                    <RoundHtml />
                    <RoundCss />
                    <RoundJs />
                    <RoundBootsrap />
                    <RoundReactJs />
                    <RoundSass />
                </div>

            </div>
        );
    }
}








export default Skill;