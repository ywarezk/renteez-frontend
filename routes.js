/**
 * The routes of the app will be defined here
 *
 * Created November 13th, 2015
 * @author: ywarezk
 * @version: 1.0
 * @copyright: Nerdz LTD
 */

/*********************
 * begin imports
 *********************/

import React from 'react';
import { Route } from 'react-router';
import AppContainer from './containers/AppContainer';
import AboutContainer from './containers/AboutContainer';
import HomepageContainer from './containers/HomepageContainer';

/*********************
 * end imports
 *********************/

/*********************
 * begin routes
 *********************/

export default (
  <Route path="/" component={AppContainer}>
    <Route path="/" component={HomepageContainer} />
    <Route path="/about" component={AboutContainer} />
  </Route>
);

/*********************
 * end routes
 *********************/
