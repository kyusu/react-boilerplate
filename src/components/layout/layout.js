import React from 'react';
import {default as Router, RouteHandler} from 'react-router';
import style from './layout.css';
import Helmet from 'react-helmet';

let Layout = React.createClass({
    render() {
        return (
            <div>
                <Helmet titleTemplate="%s | react-boilerplate" />
                <h2 className={style.title}>react-boilerplate</h2>
                <ul className={style.navSet}>
                    <li className={style.navItem}>
                        <Router.Link to="/">
                            Home
                        </Router.Link>
                    </li>
                    <li className={style.navItem}>
                        <Router.Link to="/about">
                            About
                        </Router.Link>
                    </li>
                </ul>
                <RouteHandler/>
            </div>
        );
    }
});

export default Layout;
