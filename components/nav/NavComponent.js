/**
 * Header component
 *
 * Created September 28th, 2015
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdz LTD
 */


/*********************
 * begin imports
 *********************/

import React, { Component } from 'react';
import LogoComponent from './LogoComponent';
import MenuComponent from './MenuComponent';
import { store } from '../../index';

/*********************
 * end imports
 *********************/

export default class NavComponent extends Component {

    render() {

        const { route } = this.props;
        let classNames = 'navbar navbar-inverse navbar-fixed-top';
        if(route === '/'){
            classNames = 'navbar navbar-inverse navbar-fixed-top navbar-expanded';
        }


        return (
        <nav className={classNames}>
            <div className="container">
                <LogoComponent />
                <div id="bs-example-navbar-collapse-1" className="collapse navbar-collapse">
                    <MenuComponent />
                </div>
            </div>
        </nav>
        );
    }
}

