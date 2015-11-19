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

import * as GeocoderFactory from 'node-geocoder';

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
        var geocoder = GeocoderFactory.default('google', 'http', {});
        return geocoder.geocode(searchText);
    }

};

/*****************
 * end class
 *****************/

