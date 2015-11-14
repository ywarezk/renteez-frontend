/**
 * React component of the cities displayed during search
 *
 * Created October 9th, 2015
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

export default class CityListItemComponent extends Component {

    render(){
        return (
            <li className="city-list-item">
                {this.props.cityObject}
            </li>
        );
    }

}

