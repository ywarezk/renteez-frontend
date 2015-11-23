/**
 * test for the logo dumb component
 *
 * Created October 31st, 2015
 * @author: ywarezk
 * @version: 1.0
 * @copyright: Nerdz Ltd.
 */

/******************
 * begin imports
 ******************/

import React from 'react/addons';
import LogoComponent from '../../components/nav/LogoComponent';
import {expect} from 'chai';
import jsdomReact from '../TestHelper';

/******************
 * end imports
 ******************/

/******************
 * begin tests
 ******************/

const {renderIntoDocument, scryRenderedDOMComponentsWithTag} = React.addons.TestUtils;


describe('LogoComponentTest', ()=>{

    jsdomReact();
    it('Should render the logo', () => {

        const component = renderIntoDocument(
            <LogoComponent />
        );
        const anchors = scryRenderedDOMComponentsWithTag(component, 'a');
        expect(anchors.length).to.equal(1);
    });

});

/******************
 * end tests
 ******************/