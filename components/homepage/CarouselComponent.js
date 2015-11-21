/**
 * the carousel in the homepage
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
export default class CarouselComponent extends Component {

    render(){
        console.log('rendering Carousel component');
        return (
            <div>
                <div className="brand-name">Renteez</div>
                <hr className="colored" />
                <div className="brand-name-subtext">Placing rental homes from facebook on map</div>
            </div>
        );

    }


}


/*********************
 * end header
 *********************/