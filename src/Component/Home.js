import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import '../style/Home.css';



class Home extends Component
{
    render()
    {
        return (
            <div className="App">
                <div className="title">
                    <h1 className="titleHomepage1">Hai I'm<br /> <span className="titleHomepage2">Sandiko prastyo</span></h1>
                    <h2>Frontend Developer</h2>
                </div>
                <div className="icon">
                    <SocialIcon url="https://github.com/sandikoprastyo" target="_blank" />
                    <SocialIcon url="https://www.linkedin.com/in/sandiko-prastyo-b62115119/" target="_blank" />
                    <SocialIcon url="https://facebook.com/Sandikoprastyo" target="_blank" />
                    <SocialIcon url="https://www.instagram.com/sandikoprastyo/" target="_blank" />
                    <SocialIcon url="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=sandikoprastyo@gmail.com" target="_blank" />
                    <SocialIcon url="https://gethired.id/download-cv" target="_blank" />
                </div>
            </div>
        );
    }
}

export default Home;
