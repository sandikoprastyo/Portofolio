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
                    I am a freelance front developer
          I am very happy with this field for the past year. <br/>I have tried making projects whether it is for clients or for personal use. I have also accepted the creation of corporate, personal, and marketing websites<br/>
          the technology that I often use as a freelance developer is Wordpress, Seo, Google ads / analysts, Bootstrap, Codeigniter, Reactjs, Webpack, Babel, Git / Github, Sass, Npm, Axios etc.
                </p>
            </div>
        );
    }
}


export default About;