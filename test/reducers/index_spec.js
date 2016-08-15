import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../../src/reducers';

describe('reducer', () => {

    it('handles SET_STATE', () => {
        const initialState = Map();
        const action = {
            type: 'SET_STATE',
            state: Map({
                todos: List.of(
                    Map({id: 1, text: 'Home', status: 'active'}),
                    Map({id: 2, text: 'Kind', status: 'active'}),
                    Map({id: 3, text: 'Tree', status: 'completed'})
                )
            })
        };

        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
            todos: [
                {id: 1, text: 'Home', status: 'active'},
                {id: 2, text: 'Kind', status: 'active'},
                {id: 3, text: 'Tree', status: 'completed'}
            ]
        }));
    });

    it('handles SET_STATE with plain JS payload', () => {
        const initialState = Map();
        const action = {
            type: 'SET_STATE',
            state: {
                todos: [
                    {id: 1, text: 'Home', status: 'active'},
                    {id: 2, text: 'Kind', status: 'active'},
                    {id: 3, text: 'Tree', status: 'completed'}
                ]
            }
        };
        const nextState = reducer(initialState, action);
        expect(nextState).to.equal(fromJS({
            todos: [
                {id: 1, text: 'Home', status: 'active'},
                {id: 2, text: 'Kind', status: 'active'},
                {id: 3, text: 'Tree', status: 'completed'}
            ]
        }));
    });

    it('handles SET_STATE without initial state', () => {
        const action = {
            type: 'SET_STATE',
            state: {
                todos: [
                    {id: 1, text: 'Home', status: 'active'},
                    {id: 2, text: 'Kind', status: 'active'},
                    {id: 3, text: 'Tree', status: 'completed'}
                ]
            }
        };
        const nextState = reducer(undefined, action);
        expect(nextState).to.equal(fromJS({
            todos: [
                {id: 1, text: 'Home', status: 'active'},
                {id: 2, text: 'Kind', status: 'active'},
                {id: 3, text: 'Tree', status: 'completed'}
            ]
        }));
    });

    it('handles TOGGLE_COMPLETE by changing the status from active to completed', () => {
        const initialState = fromJS({
            todos: [
                {id: 1, text: 'Home', status: 'active'},
                {id: 2, text: 'Kind', status: 'active'},
                {id: 3, text: 'Tree', status: 'completed'}
            ]
        });
        const action = {
            type: 'TOGGLE_COMPLETE',
            itemId: 1
        };
        const nextState = reducer(initialState, action);
        expect(nextState).to.equal(fromJS({
            todos: [
                {id: 1, text: 'Home', status: 'completed'},
                {id: 2, text: 'Kind', status: 'active'},
                {id: 3, text: 'Tree', status: 'completed'}
            ]
        }));
    });

    it('handles TOGGLE_COMPLETE by changing the status from completed to active', () => {
        const initialState = fromJS({
            todos: [
                {id: 1, text: 'Home', status: 'active'},
                {id: 2, text: 'Kind', status: 'active'},
                {id: 3, text: 'Tree', status: 'completed'}
            ]
        });
        const action = {
            type: 'TOGGLE_COMPLETE',
            itemId: 3
        };
        const nextState = reducer(initialState, action);
        expect(nextState).to.equal(fromJS({
            todos: [
                {id: 1, text: 'Home', status: 'active'},
                {id: 2, text: 'Kind', status: 'active'},
                {id: 3, text: 'Tree', status: 'active'}
            ]
        }));
    });

    it('handles EDIT_ITEM by setting editing to true', () => {
        const initialState = fromJS({
            todos: [
                {id: 1, text: 'Home', status: 'active', editing: false},
            ]
        });
        const action = {
            type: 'EDIT_ITEM',
            itemId: 1
        };
        const nextState = reducer(initialState, action);
        expect(nextState).to.equal(fromJS({
            todos: [
                {id: 1, text: 'Home', status: 'active', editing: true},
            ]
        }));
    });

    it('handles CANCEL_EDITING by setting editing to false', () => {
        const initialState = fromJS({
            todos: [
                {id: 1, text: 'Home', status: 'active', editing: true},
            ]
        });
        const action = {
            type: 'CANCEL_EDITING',
            itemId: 1
        };
        const nextState = reducer(initialState, action);
        expect(nextState).to.equal(fromJS({
            todos: [
                {id: 1, text: 'Home', status: 'active', editing: false},
            ]
        }));
    });

    it('handles DONE_EDITING by setting by updating the text', () => {
        const initialState = fromJS({
            todos: [
                {id: 1, text: 'Home', status: 'active', editing: true},
            ]
        });
        const action = {
            type: 'DONE_EDITING',
            itemId: 1,
            newText: 'Tree',
        };
        const nextState = reducer(initialState, action);
        expect(nextState).to.equal(fromJS({
            todos: [
                {id: 1, text: 'Tree', status: 'active', editing: false},
            ]
        }));
    });

    it('handles ADD_ITEM by adding the item', () => {
        const initialState = fromJS({
            todos: [
                {id: 1, text: 'Home', status: 'active'}
            ]
        });
        const action = {
            type: 'ADD_ITEM',
            text: 'Kind'
        };
        const nextState = reducer(initialState, action);
        expect(nextState).to.equal(fromJS({
            todos: [
                {id: 1, text: 'Home', status: 'active'},
                {id: 2, text: 'Kind', status: 'active'},
            ]
        }));
    });

    it('handles DELETE_ITEM by removing the item', () => {
        const initialState = fromJS({
            todos: [
                {id: 1, text: 'Home', status: 'active'},
                {id: 2, text: 'Kind', status: 'completed'},
            ]
        });
        const action = {
            type: 'DELETE_ITEM',
            itemId: 2
        };
        const nextState = reducer(initialState, action);
        expect(nextState).to.equal(fromJS({
            todos: [
                {id: 1, text: 'Home', status: 'active'},
            ]
        }));
    });
});