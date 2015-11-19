/**
 * homepage controller
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
import CarouselComponent from '../components/homepage/CarouselComponent';
import SearchComponent from '../components/homepage/SearchComponent';
import ScrollDownComponent from '../components/homepage/ScrollDownComponent';

/*********************
 * end imports
 *********************/


/*********************
 * begin header
 *********************/

export default class HomepageContainer extends Component {

    /**
     * constructor`
     * @param props
     */
    constructor(props) {
        super(props);
        this.onChangeCitySearch = this.onChangeCitySearch.bind(this);
    };

    /**
     * invoked every time a user enters text in the input
     * @private
     * @param {object} event
     */
    onChangeCitySearch(searchString){
        console.log('Searching for: ' + searchString);
    };

    /**
     * main render function
     * @returns {XML}
     */
    render(){
        return (
            <header className="renteez-header" >
                <div className="intro-content">
                    <CarouselComponent />
                    <SearchComponent
                        onChange={this.onChangeCitySearch}
                        cities={this.cities}
                        />
                </div>
                <ScrollDownComponent directTo={`/about`} />
            </header>
        );
    };

}


/*********************
 * end header
 *********************/