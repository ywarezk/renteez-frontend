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
import { Link } from 'react-router';

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
        const directTo = this.props.directTo;
        return (
            <div className="scroll-down">
                <Link to={directTo} className="btn page-scroll" >
                    <i className="fa fa-angle-down fa-fw"></i>
                </Link>
            </div>
        );

    }


}


/*********************
 * end header
 *********************/