/**
 * Actions for the homepage, the return types from the functions should remain immutable
 *
 * Created October 8th, 2015
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdz LTD
 */

/*******************
 * begin imports
 ******************/

import * as types from '../constants/ActionTypesConstants';
import { GeocodeModel } from '../core/GeocodeModel';
import { RESET_CITY_LIST } from '../constants/ActionTypesConstants';

/*******************
 * end imports
 ******************/

/*******************
 * begin actions
 ******************/

/**
 * when we are starting to fetch the cities
 * @returns {{type: BEGIN_FETCH_CITIES}}
 */
export function requestCities(){
  return {type: types.BEGIN_FETCH_CITIES};
}

/**
 * got cities from the geocoding
 * @param cities
 */
export function receiveCities(cities){
  return {type: types.SUCCESS_FETCH_CITIES, cities: cities};
}

/**
 * got cities from the geocoding
 * @param cities
 */
export function errorFetchCities(e){
  return {type: types.ERROR_FETCH_CITIES, error: e};
}

/**
 * action for the user typing text in the search box
 * @param {String} text
 * @returns {{type: CHANGE_SEARCH, text: *}}
 */
export function changeSearch(text){

  /**
   * we return an async thunk function
   */
  return async function(dispatch){

    dispatch(requestCities());

    let geo = new GeocodeModel();
    console.log('1. running text in geocoding: ' + text);
    try{
      let result = geo.geocoding(text);
      console.log('2.1. got cities: ' + result);
      dispatch(receiveCities(result));
    }
    catch(e){
      console.log('2.2. got error: ' + e);
      dispatch(errorFetchCities(e));
    }


  };
}

/**
 * when we have empty city list
 * @returns {{type: RESET_CITY_LIST}}
 */
export function resetCityList() {
  return {
    type: RESET_CITY_LIST
  }
}



/*******************
 * end actions
 ******************/


