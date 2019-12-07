import React, { Component } from 'react';
import '../style/Home.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Work from './Work';
import Skill from './Skill';

class Nav extends Component
{
    render()
    {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/About">About</Link>
                            </li>
                            <li>
                                <Link to="/Skill">Skill</Link>
                            </li>
                            <li>
                                <Link to="/Work">Work</Link>
                            </li>
                        </ul>
                    </nav>


                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/About" component={About} />
                        <Route path="/Skill" component={Skill} />
                        <Route path="/Work" component={Work} />
                    </Switch>
                </div>
            </Router >
        );
    }

}

export default Nav;
