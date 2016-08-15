import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';
import {compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';
import {saveState, loadState} from './lib/localStorage';

import {TodoAppContainer} from './components/TodoApp';

/**
 * Add data to ToDo application
 */

let store;

if(process.env.NODE_ENV === 'developer') {
    const createStoreDevTools = compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore);
    store = createStoreDevTools(reducers);
} else {
    let persistedState = loadState();
    store = createStore(
        reducers,
        persistedState
    );
}

store.dispatch({
    type: 'SET_STATE',
    state: Map({
        todos: List.of(
            Map({id: 1, text: 'Построить дом', status: 'active', editing: false}),
            Map({id: 2, text: 'Посадить дерево', status: 'active', editing: false}),
            Map({id: 3, text: 'Вырастить сына', status: 'completed', editing: false})
        )
    })
});

store.subscribe(() => {
    saveState({
        todos: store.getState().get('todos')
    })
});

/**
 * Render ToDo list application
 */

ReactDOM.render(
    <Provider store={store}>
        <TodoAppContainer />
    </Provider>,
    document.getElementById('app')
);