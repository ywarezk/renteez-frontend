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
import {store} from '../index';
import { connect } from 'react-redux';
import * as RenteezActions from '../actions/RenteezActions';
import { ImmutableRenderMixin } from 'react-immutable-render-mixin';

/*********************
 * end imports
 *********************/


/*********************
 * begin header
 *********************/

class HomepageContainer extends Component {

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
        this.props.changeSearch(searchString);
    };

    /**
     * main render function
     * @returns {XML}
     */
    render(){
        console.log('rendering homepage container');
        console.log(JSON.stringify(this.state));
        const { cities, isLoading} = this.props;
        return (
            <header className="renteez-header" >
                <div className="intro-content">
                    <CarouselComponent />
                    <SearchComponent
                        onChange={this.onChangeCitySearch}
                        cities={cities}
                        isLoading={isLoading}
                        />
                </div>
            </header>
        );
    };

}
HomepageContainer.mixins = [ImmutableRenderMixin];

/**
 * which items from the state do we want to get
 * @param state
 * @returns {{cities: (*|Array|cities|newCities)}}
 */
function mapStateToProps(state) {
  return {
    cities: state.HomepageReducer.cities,
    isLoading: state.HomepageReducer.isLoading
  }
}


/**
 * which actions do the homepage want to get
 * @param dispatch
 * @returns {{changeSearch: Function}}
 */
function mapDispatchToProps(dispatch) {
  return {
    changeSearch: (searchString) => dispatch(RenteezActions.requestCities())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomepageContainer);


/*********************
 * end header
 *********************/