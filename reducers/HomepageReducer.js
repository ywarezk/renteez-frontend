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
import { Map  } from 'immutable';

/*********************
 * end imports
 *********************/

const defaultState = new Map();

/**
 * generic function that will recieve actions from the homepage and return a new state
 * @param state
 * @param action
 * @returns {*}
 */
export function HomepageReducer(state = defaultState, action = null){
    let map = Map(state);
    switch (action.type){
        case SUCCESS_FETCH_CITIES:
            return map.set('cities', action.cities).delete('isLoading');
        case BEGIN_FETCH_CITIES:
            return map.set('isLoading',true);
    }
    return state;
}

