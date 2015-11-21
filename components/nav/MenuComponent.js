/**
 * Homepage menu component
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
import { Link } from 'react-router';

/*********************
 * end imports
 *********************/

export default class MenuComponent extends Component {


  render() {
        console.log('rendering Menu component');
        return (
            <ul className="nav navbar-nav navbar-right">
                <li>
                    <Link to={`/about`}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to={`/contact`}>
                        Contact Us
                    </Link>
                </li>
            </ul>
        );
  }
}
