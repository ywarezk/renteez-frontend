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

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

/*********************
 * end imports
 *********************/

export default class CityListItemComponent extends Component {

    render(){
        console.log('rendering CityListItem component');
        const { cityObject } = this.props;
        return (
            <li className="city-list-item list-group-item">
                <h5>
                    <Link to={`/map`}>
                        <i className="fa fa-map-marker" ></i>
                        <span>
                            {cityObject.city}
                        </span>
                    </Link>
                </h5>
            </li>
        );
    }

}

/**
 * defined the properties of the search component
 * @type {{onChange: *}}
 */
CityListItemComponent.propTypes = {
  cityObject: PropTypes.object.isRequired
};

