import React from 'react';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import * as actionCreators from '../actions/creators';

import TodoHeader from './TodoHeader'
import TodoList from './TodoList'

import style from './TodoApp.styl'

/**
 * Head of components
 */

export class TodoApp extends React.Component {
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
                <TodoHeader addItem={this.props.addItem} />
                <TodoList {...this.props} />
            </section>
        )
    }
};

function mapStateToProps(state) {
    return {
        todos: state.get('todos')
    }
}

export const TodoAppContainer = connect(mapStateToProps, actionCreators)(TodoApp);