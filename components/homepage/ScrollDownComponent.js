/**
 * The Button to scroll down to the other sections
 *
 * Created October 8th, 2015
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

/*********************
 * begin header
 *********************/

//TODO
//add translation here
export default class ScrollDownComponent extends Component {

    render(){

        return (

            <div className="scroll-down">
                <a href="#about" className="btn page-scroll">
                    <i className="fa fa-angle-down fa-fw"></i>
                </a>
            </div>

        );

    }


}


/*********************
 * end header
 *********************/