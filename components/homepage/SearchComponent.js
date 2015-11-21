/**
 * The Search box in the homepage
 *
 * Created October 8th, 2015
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdz LTD
 */


/*********************
 * begin imports
 *********************/

import React, { Component, PropTypes } from 'react';
import CityListItemComponent from './CityListItemComponent';
import {List} from 'immutable';
import _ from 'lodash';

/*********************
 * end imports
 *********************/

/*********************
 * begin header
 *********************/

//TODO
//add translation here
export default class SearchComponent extends Component {

    render(){
        console.log('rendering search component');
        const { onChange, isLoading, cities } = this.props;
        console.log('cities: ' + JSON.stringify(cities));

        //set the city list
        let citiesRendered;
        if(cities != null && cities.length > 0){
            citiesRendered = (
                <div className="city-list-wrapper">
                    {
                        cities.map((city) => {
                            return <CityListItemComponent cityObject={city} />
                        })
                    }
                </div>
            );
        }

        //set the main form
        return (
            <div className="renteez-homesearch">
                <div className="row content-row">
                    <div className="col-lg-8 col-lg-offset-2">
                        <form noValidate="" id="contactForm" name="sentMessage">
                            <div className="row control-group">
                                <div className="form-group col-xs-12 floating-label-form-group controls">
                                    <label>
                                        City Name

                                        {
                                            isLoading ? <i className="fa fa-spinner fa-spin"></i> : <i className="fa fa-spinner fa-spin hidden"></i>
                                        }
                                    </label>
                                    <input type="text" data-validation-required-message="Please enter your name." required="" onChange={e => onChange(e.target.value)} id="name" placeholder="Enter city name..." className="form-control" />
                                    <p className="help-block text-danger"></p>
                                    <ul className="city-list">
                                    </ul>
                                </div>
                            </div>
                            <br />
                            <div id="success"></div>
                            <div className="row">
                                <div className="form-group col-xs-12">
                                    <button className="btn btn-outline-light" type="submit">Send</button>
                                </div>
                            </div>
                        </form>
                        {citiesRendered}
                    </div>
                </div>
            </div>
        );

    }


}

/**
 * defined the properties of the search component
 * @type {{onChange: *}}
 */
SearchComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};


/*********************
 * end header
 *********************/