/**
 * will test the core functionality
 *
 * Created October 16th, 2015
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdz LTD
 */


/******************
 * begin imports
 ******************/

import {expect} from 'chai';
import { GeocodeModel } from '../../core/GeocodeModel';
import { Map } from 'immutable';

/******************
 * end imports
 ******************/


/******************
 * begin tests
 ******************/

describe('Core tests', () => {

    /**
     * test geocoding
     */
    it('The geocoding should return Tel Aviv',async () =>{
        let geocoder = new GeocodeModel();
        let result = await geocoder.geocoding('Tel Aviv');
        expect(result.length).equals(1);
        expect(result[0]).to.include.keys('latitude');
        expect(result[0]).to.include.keys('longitude');
    });

});

/******************
 * end tests
 ******************/