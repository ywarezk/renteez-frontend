/**
 * Header component
 *
 * Created September 28th, 2015
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdz LTD
 */


/*********************
 * begin imports
 *********************/

import React, { Component, PropTypes } from 'react';
import LogoComponent from './LogoComponent';
import MenuComponent from './MenuComponent';
import { connect } from 'react-redux';

/*********************
 * end imports
 *********************/

export default class NavComponent extends Component {

    render() {
        console.log('rendering navcomponent');
        const { route } = this.props;
        let classNames = 'navbar navbar-inverse navbar-fixed-top';
        if(route === '/'){
            classNames = 'navbar navbar-inverse navbar-fixed-top navbar-expanded';
        }

        return (
        <nav className={classNames}>
            <div className="container">
                <LogoComponent />
                <div id="bs-example-navbar-collapse-1" className="collapse navbar-collapse">
                    <MenuComponent />
                </div>
            </div>
        </nav>
        );
    }
}



/**
 * defined the properties of the nav component
 * @type {{onChange: *}}
 */
NavComponent.propTypes = {
  route: PropTypes.string.isRequired
};

export default connect(
    () => {return {}}
)(NavComponent);
