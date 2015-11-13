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

/*********************
 * end imports
 *********************/

export default class LogoComponent extends Component {


  render() {
    return (
        <div className="navbar-header">
            <button data-target="#bs-example-navbar-collapse-1" data-toggle="collapse" className="navbar-toggle" type="button">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a href="#page-top" className="navbar-brand page-scroll renteez-logo">
                <i className="fa fa-home"></i>
                <span className="logo-r">R</span>
                <span className="logo-ent">ENT</span>
                <span className="logo-ee">ee</span>
                <span className="logo-ent">Z</span>
            </a>
        </div>
    );
  }
}
