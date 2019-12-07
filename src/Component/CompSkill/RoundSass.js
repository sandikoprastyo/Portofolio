import { easeQuadInOut } from 'd3-ease';
import React, { Component } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import AnimatedProgressProvider from '../AnimatedProgressProvider';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';




class RoundSass extends Component
{
    render()
    {
        return (
            <div className="circle">
                <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={70}
                    duration={1.4}
                    easingFunction={easeQuadInOut}
                    no-repeat
                >
                    {
                        value =>
                        {
                            const roundedValue = Math.round(value);
                            return (
                                <CircularProgressbar
                                    strokeWidth={10}
                                    value={value}
                                    text={`${roundedValue}%`}
                                    circleRatio={0.75}
                                    styles={buildStyles({
                                        rotation: 1 / 2 + 1 / 8,
                                        strokeLinecap: 'round',
                                        textSize: '16px',
                                        textColor: '#FFFF',
                                        trailColor: '#FFFF',
                                        pathColor: '#D36CA4',
                                        pathTransition: "none",
                                    })}
                                />
                            )
                        }
                    }

                </AnimatedProgressProvider>
                <p>Sass</p>



            </div>

        );
    }
}








export default RoundSass;