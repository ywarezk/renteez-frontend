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

    let searchComponent, changeFunction;
    jsdomReact();
    before('render the search component', () => {
        changeFunction = function(){};
    });


    it('should successfully render the search component into view', () => {
        const searchComponent = renderIntoDocument(
            <SearchComponent
                onChange = {changeFunction}
                cities = {[]}
                isLoading = {false}
                />
        );
        const form = scryRenderedDOMComponentsWithTag(searchComponent, 'form');
        expect(form.length).to.equal(1);
        const cityList = React.findDOMNode(searchComponent).querySelectorAll('.city-list');
        expect(cityList.length).to.equal(0);
        const loading = React.findDOMNode(searchComponent).querySelectorAll('.fa-spinner');
        expect(loading .length).to.equal(0);
    });

    it('When we have cities we should see the component with a city list', () => {
        const searchComponent = renderIntoDocument(
            <SearchComponent
                onChange = {changeFunction}
                cities = {[{city: 'Tel Aviv'}]}
                isLoading = {false}
                />
        );
        const cityList = React.findDOMNode(searchComponent).querySelectorAll('.city-list');
        expect(cityList.length).to.equal(1);
    });

    it('When a is loading is passed we should see the spinner', () => {
        const searchComponent = renderIntoDocument(
            <SearchComponent
                onChange = {changeFunction}
                cities = {[]}
                isLoading = {true}
                />
        );
        const loading = React.findDOMNode(searchComponent).querySelectorAll('.fa-spinner');
        expect(loading .length).to.equal(1);
    });



});

/******************
 * end test
 ******************/