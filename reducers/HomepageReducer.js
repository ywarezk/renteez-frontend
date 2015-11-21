/**
 * Will hold the reducer logic for the  homepage
 *
 * Created October 10th, 2015
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdz LTD
 */

/*********************
 * begin imports
 *********************/

import { SUCCESS_FETCH_CITIES, BEGIN_FETCH_CITIES } from '../constants/ActionTypesConstants';
import { GeocodeModel } from '../core/GeocodeModel';

/*********************
 * end imports
 *********************/

const defaultState = {isLoading: false, cities: []};

/**
 * generic function that will recieve actions from the homepage and return a new state
 * @param state
 * @param action
 * @returns {*}
 */
export function HomepageReducer(state = defaultState, action = null){
    //let map = Map(state);
    switch (action.type){
        case SUCCESS_FETCH_CITIES:
            return {cities: action.cities, isLoading: false};
            //return map.set('cities', action.cities).delete('isLoading');
        case BEGIN_FETCH_CITIES:
            console.log('dispatch homepage reducer');
            return {cities: [], isLoading: true};
    }
    return state;
}

