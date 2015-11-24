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
import { Map, TileLayer } from 'react-leaflet';

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
                <Map bounds={[[50.505, -29.09],[52.505, 29.09]]}>
                    <TileLayer
                      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                </Map>
            </section>
        );
    };

}


/*********************
 * end about
 *********************/
