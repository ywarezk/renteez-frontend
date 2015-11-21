/**
 * This class will handle the geocoding of our app
 *
 * Created October 16th, 2015
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdz LTD
 *
 */

/*****************
 * begin imports
 *****************/

//import * as GeocoderFactory from 'node-geocoder';
//var geocoder = require('geocoder');
import { SERVER_URL } from '../constants/ActionTypesConstants';

/*****************
 * end imports
 *****************/

/*****************
 * begin class
 *****************/

export class GeocodeModel{

    /**
     * from search string will display all the cities i have
     * @param {String} text
     */
    geocoding(searchText){
        //console.log('0.1');
        ////let geocoder = GeocoderFactory.default('google', 'http', {});
        //console.log('0.2 ' + searchText);
        //let result = geocoder.geocode(searchText);
        //console.log('0.3');
        //return result;
        console.log('!!!!');
        console.log(SERVER_URL + 'geocode/geocode/?location=' + searchText);
        return fetch(SERVER_URL + 'geocode/geocode/?location=' + searchText);
    }

};

/*****************
 * end class
 *****************/

