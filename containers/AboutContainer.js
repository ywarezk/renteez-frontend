/**
 * About controller
 *
 * Created October 8th, 2015
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


/*********************
 * begin about
 *********************/

export default class AboutContainer extends Component {

    /**
     * main render function
     * @returns {XML}
     */
    render(){
        return (
           <section id="about">
                <div className="container-fluid">
                    <div className="row text-center">
                        <div className="col-lg-12 wow fadeIn animated">
                            <h1>Community Driven Map Tool</h1>
                            <p>Renteez will crawl online communitites and place rental places on the map</p>
                            <hr className="colored" />
                        </div>
                    </div>
                    <div className="row text-center content-row">
                        <div data-wow-delay=".2s" className="col-md-3 col-sm-6 wow fadeIn animated" >
                            <div className="about-content">
                                <i className="fa fa-eye fa-4x"></i>
                                <h3>Crowd Smart</h3>
                                <p>Collects data from tons of sources online to serve the most up to date and relevant homes to rent</p>
                            </div>
                        </div>
                        <div data-wow-delay=".4s" className="col-md-3 col-sm-6 wow fadeIn animated">
                            <div className="about-content">
                                <i className="fa fa-edit fa-4x"></i>
                                <h3>Built by the community</h3>
                                <p>Open Source platform build by the community and supervised by <a href="http://www.nerdeez.com">Nerdeez</a></p>
                            </div>
                        </div>
                        <div data-wow-delay=".6s" className="col-md-3 col-sm-6 wow fadeIn animated">
                            <div className="about-content">
                                <i className="fa fa-tablet fa-4x"></i>
                                <h3>Responsive</h3>
                                <p>Check us out with you mobile or tablet device</p>
                            </div>
                        </div>
                        <div data-wow-delay=".8s" className="col-md-3 col-sm-6 wow fadeIn animated">
                            <div className="about-content">
                                <i className="fa fa-heart fa-4x"></i>
                                <h3>Built with Love</h3>
                                <p>Built with love by Nerdeez geeks with the help of the community</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };

}


/*********************
 * end about
 *********************/
