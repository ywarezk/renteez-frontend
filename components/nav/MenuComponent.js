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

/*********************
 * end imports
 *********************/

export default class MenuComponent extends Component {


  render() {
    return (
        <ul className="nav navbar-nav navbar-right">
            <li className="hidden active">
                <a href="#page-top" className="page-scroll"></a>
            </li>
            <li>
                <a href="#about" className="page-scroll">About</a>
            </li>
            <li>
                <a href="#contact" className="page-scroll">Contact</a>
            </li>
        </ul>
    );
  }
}
