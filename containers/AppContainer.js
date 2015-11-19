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
import { resetCityList } from '../actions/RenteezActions';
import NavComponent from '../components/nav/NavComponent';
import RouteCssTransitionContainer from '../containers/RouteCssTransitionContainer';


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
        <RouteCssTransitionContainer
          component="div" transitionName="example"
          transitionEnterTimeout={500} transitionLeaveTimeout={500}
        >
          {children}
        </RouteCssTransitionContainer>
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
