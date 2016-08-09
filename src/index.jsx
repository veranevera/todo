import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';

import TodoApp from './components/TodoApp';

/**
 * Add data to ToDo application
 */
const TODOS = List.of(
    Map({id: 1, text: 'Построить дом', status: 'active', editing: false}),
    Map({id: 2, text: 'Посадить дерево', status: 'active', editing: false}),
    Map({id: 3, text: 'Вырастить сына', status: 'completed', editing: false})
);

/**
 * Render ToDo list application
 */

ReactDOM.render(
    <TodoApp todos={TODOS} />,
    document.getElementById('app')
);