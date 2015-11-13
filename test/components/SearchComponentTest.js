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

    it('test our app for immutability', () => {

        let cities = ['Tel Aviv', 'Haifa'];
        const changeFunction = function(){};
        let component = renderIntoDocument(
            <SearchComponent
                onChange = {changeFunction}
                cities = {cities}
                />
        );
        let cityList = scryRenderedDOMComponentsWithTag(component, 'li');
        expect(cityList.length).to.equal(2);
        expect(cityList[1].getDOMNode().textContent).to.equal('Haifa');
        cities[1] = 'Jerusalem';
        component.render({cities: cities});
        cityList = scryRenderedDOMComponentsWithTag(component, 'li');
        expect(cityList[1].getDOMNode().textContent).to.equal('Haifa');

        const cities2 = List.of('Tel Aviv', 'Jerusalem');
        component = renderIntoDocument(
            <SearchComponent
                onChange = {changeFunction}
                cities = {cities2}
                />
        );
        cityList = scryRenderedDOMComponentsWithTag(component, 'li');
        expect(cityList[1].getDOMNode().textContent).to.equal('Jerusalem');
        const newCities = cities2.set(1, 'Haifa');
        component.render({cities: newCities});
        cityList = scryRenderedDOMComponentsWithTag(component, 'li');
        //TODO
        //expect(cityList[1].getDOMNode().textContent).to.equal('Haifa');

    });

});

/******************
 * end test
 ******************/