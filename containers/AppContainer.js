/**
 * app container
 *
 * Created October 8th, 2015
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdz LTD
 */

/****************
 * begin imports
 ****************/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import Explore from '../components/Explore';
import { resetCityList } from '../actions';
import NavComponent from '../components/nav/NavComponent';

/****************
 * end imports
 ****************/

/******************
 * begin container
 ******************/

class AppContainer extends Component {

  render() {
    const { children } = this.props
    return (
      <div>
        <NavComponent />
        {children}
      </div>
    );
  }
};

AppContainer.propTypes = {
  // Injected by React Router
  children: PropTypes.node
};

function mapStateToProps(/*state*/) {
  return {
  }
}

export default connect(mapStateToProps, {
  resetCityList,
  pushState
})(AppContainer)

/******************
 * end container
 ******************/
