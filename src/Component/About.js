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
                <div className="intro">
                    <p className="p1">I am the front developer or Web developer<br /></p>

                    <p className="p2">I am very passionate and familiar with this field since 2011 for the past year<br /></p>

                    <p className="p3">I am trying to make a project whether it is for a client or for personal use. I have also accepted the creation of corporate, personal, and marketing websites <br /></p>

                    <p className="p4">the technology I often use as a freelance developer is Wordpress, Seo, Google ads / analysts, Bootstrap, Codeigniter, Reactjs, Webpack, Babylon, Git / Github, Sass, Npm, Axios etc.</p>
                </div>
            </div>
        );
    }
}


export default About;