import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import TodoHeader from './TodoHeader'
import TodoList from './TodoList'

import style from './TodoApp.styl'

/**
 * Head of components
 */

export default class TodoApp extends React.Component {
    /**
     * @constructor
     * @param {object} props - available after call function super()
     */
    constructor(props) {
        super(props);
        this.state = {todos: props.todos || []};
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    /**
     * Render component TodoApp
     * @return {JSX} - Add markup and output components
     */
    render() {
        return (
            <section className={style.section}>
                <TodoHeader />
                <TodoList todos={this.props.todos} />
            </section>
        )
    }
};