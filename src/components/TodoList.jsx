import React from 'react';
import TodoItem from './TodoItem';

import style from './TodoList.styl';

export default class TodoList extends React.Component {
    /**
     * Render component TodoList
     * @return {JSX} - Output list
     */
    render() {
        return (
            <ul className={style.list}>
                {this.props.todos.map((item, idx) =>
                    <TodoItem key={idx} id={`todo_${idx}`} text={item.get('text')} />
                )}
            </ul>
        )
    }
};