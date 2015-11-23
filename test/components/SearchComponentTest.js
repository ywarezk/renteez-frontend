/**
 * this will test the search component
 *
 * Created November 5th, 2015
 * @author: ywarezk
 * @version: 1.0
 * @copyright: Nerdz Ltd.
 */


/******************
 * begin imports
 ******************/

import SearchComponent from '../../components/homepage/SearchComponent';
import React from 'react/addons';
import {List} from 'immutable';
import jsdomReact from '../TestHelper';
import {expect} from 'chai';

/******************
 * end imports
 ******************/

/******************
 * begin test
 ******************/

const {renderIntoDocument, scryRenderedDOMComponentsWithTag} = React.addons.TestUtils;

describe('SearchComponentTest', () => {

    jsdomReact();
    it('should successfully render the search component into view', () => {

        const changeFunction = function(){};
        const cities = [];
        const component = renderIntoDocument(
            <SearchComponent
                onChange = {changeFunction}
                cities = {cities}
                />
        );
        const form = scryRenderedDOMComponentsWithTag(component, 'form');
        expect(form.length).to.equal(1);

    });

    

});

/******************
 * end test
 ******************/