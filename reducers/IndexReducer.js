/**
 * Entry point for our app reducers
 *
 * Created October 23rd, 2015
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdz LTD
 *
 */

import { combineReducers } from 'redux';
import { HomepageReducer } from '../reducers/HomepageReducer';
import { routerStateReducer } from 'redux-router';



export const IndexReducer = combineReducers({
  HomepageReducer,
  router: routerStateReducer
});

