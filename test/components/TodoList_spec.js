import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TodoList from '../../src/components/TodoList';
import {expect} from 'chai';
import {List, Map} from 'immutable';

require.extensions['.styl'] = () => {
    return;
};

const {renderIntoDocument,
    scryRenderedDOMComponentsWithTag} = TestUtils;

describe('TodoList', () => {
    it('renders a list with reverse sorting and check status', () => {
        const todos = List.of(
            Map({id: 1, text: 'Tree', status: 'active'}),
            Map({id: 2, text: 'Kind', status: 'completed'}),
            Map({id: 3, text: 'Home', status: 'active'}),
            Map({id: 4, text: 'Sea', status: 'completed'})
        );

        const component = renderIntoDocument(
            <TodoList todos={todos} />
        );
        const items = scryRenderedDOMComponentsWithTag(component, 'li');

        expect(items.length).to.equal(4);
        expect(items[0].textContent).to.contain('Tree');
        expect(items[1].textContent).to.contain('Home');
        expect(items[2].textContent).to.contain('Sea');
        expect(items[3].textContent).to.contain('Kind');
    });


});