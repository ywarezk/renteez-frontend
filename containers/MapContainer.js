/**
 * container that displays the map page
 *
 * Created November 24th, 2015
 * @author: ywarezk
 * @version: 1.0
 * @copyright: Nerdz Ltd
 */

/*********************
 * begin imports
 *********************/

import React, { Component } from 'react';

/*********************
 * end imports
 *********************/


/*********************
 * begin about
 *********************/

export default class MapContainer extends Component {

    /**
     * main render function
     * @returns {XML}
     */
    render(){
        console.log('rendering About container');
        return (
           <section id="map">
                <h1>
                    Hello map page
                </h1>
            </section>
        );
    };

}


/*********************
 * end about
 *********************/
