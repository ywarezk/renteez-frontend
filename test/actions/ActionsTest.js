/**
 * test file for renteez actions
 *
 * Created October 23rd, 2015
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdz LTD
 */

/******************
 * begin imports
 ******************/

import {expect} from 'chai';
import * as RenteezActions from '../../actions/RenteezActions';
import * as types from '../../constants/ActionTypesConstants';

/******************
 * end imports
 ******************/

/******************
 * begin tests
 ******************/

describe('RenteezActions tests', () => {

    /**
     * test the change search action
     */
    it('test the change search action', () => {
        let recieveCitiesActions = RenteezActions.receiveCities([]);
        expect(recieveCitiesActions).to.eql({ type: types.SUCCESS_FETCH_CITIES, cities: [] });
    });

});

/******************
 * end tests
 ******************/