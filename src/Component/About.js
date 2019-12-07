import React, { Component } from 'react';
import '../style/Home.css';

class About extends Component
{
    render()
    {
        return (
            <div className="App">
                <div className="title">
                    <h1>About Me</h1>
                </div>
                <p className="intro">
                I am a freelance front developer<br/>
                I am very excited about this field for the past year I have tried to make a project whether it's for clients or for personal use<br/> the technology I've used bootstrap, materializecss, reactjs, webpack, babel, git, sass, npm, axios etc.
                </p>
            </div>
        );
    }
}


export default About;