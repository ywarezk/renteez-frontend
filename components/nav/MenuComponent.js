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
import { Router, Route, Link } from 'react-router'

/*********************
 * end imports
 *********************/

export default class MenuComponent extends Component {


  render() {
    return (
        <ul className="nav navbar-nav navbar-right">
            <li className="hidden active">
                <Link to={`/about`}>
                    About
                </Link>
            </li>
        </ul>
    );
  }
}
