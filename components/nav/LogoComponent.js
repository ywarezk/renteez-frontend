/**
 * Homepage Logo component
 *
 * Created September 28th, 2015
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdz LTD
 */


/*********************
 * begin imports
 *********************/

import React, { Component } from 'react';
import { Link } from 'react-router'

/*********************
 * end imports
 *********************/

export default class LogoComponent extends Component {


  render() {
    console.log('rendering Logo component');
    return (
        <div className="navbar-header">
            <Link to={`/`} className="navbar-brand page-scroll renteez-logo">
                <i className="fa fa-home"></i>
                <span className="logo-r">R</span>
                <span className="logo-ent">ENT</span>
                <span className="logo-ee">ee</span>
                <span className="logo-ent">Z</span>
            </Link>
        </div>
    );
  }
}
