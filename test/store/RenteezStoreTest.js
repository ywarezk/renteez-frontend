/**
 *
 * renteez store will always hold the current state of the app
 *
 * Created October 23rd, 2015
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdz LTD
 *
 */

/*********************
 * begin imports
 *********************/

import {expect} from 'chai';
import RenteezStore from '../../store/RenteezStore';
import * as types from '../../constants/ActionTypesConstants'
import * as RenteezActions from '../../actions/RenteezActions';
import { Map } from 'immutable';

/*********************
 * end imports
 *********************/

describe('Renteez store test', () =>{

    it('store test',() => {
        const store = RenteezStore();
        console.log('3');
        console.log(store.getState());
        expect(store.getState().HomepageReducer).to.eql(Map());

        store.dispatch(RenteezActions.changeSearch('tel aviv')).then(() => {
                console.log('4');
                console.log(getState());
                let currentState = store.getState();
                let cities = currentState.HomepageReducer.get('cities');
                expect(cities).to.have.size(1);
            }
        );

    });

});
