import React from 'react';
import ReactDOM from 'react-dom';
import {compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import {TodoAppContainer} from './components/TodoApp';

/**
 * Add data to ToDo application
 */

const createStoreDevTools = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);
const store = createStoreDevTools(reducer);

store.dispatch({
    type: 'SET_STATE',
    state: {
        todos: [
            {id: 1, text: 'Построить дом', status: 'active', editing: false},
            {id: 2, text: 'Посадить дерево', status: 'active', editing: false},
            {id: 3, text: 'Вырастить сына', status: 'active', editing: false},
        ]
    }
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