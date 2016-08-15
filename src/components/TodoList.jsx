import React from 'react';
import TodoItem from './TodoItem';

import style from './TodoList.styl';

export default class TodoList extends React.Component {
    /**
     * Get sorted items
     * @returns {array}
     */
    getItems() {
        if (this.props.todos) {
            let activeTodos = this.props.todos.filter(
                    (item) => item.get('status') === 'active'
                ),
                completedTodos = this.props.todos.filter(
                    (item) => item.get('status') === 'completed'
                );

            let sortedActiveTodos = activeTodos.sort(
                    (a, b) => a.get('text').localeCompare(b.get('text'))
                ).reverse(),
                sortedCompletedTodos  = completedTodos.sort(
                    (a, b) => a.get('text').localeCompare(b.get('text'))
                ).reverse();

            return sortedActiveTodos.concat(sortedCompletedTodos);
        }
        return [];
    }

    /**
     * Check is item completed
     * @returns {boolean}
     */
    isCompleted(item) {
        return item.get('status') === 'completed';
    }

    /**
     * Render component TodoList
     * @return {JSX} - Output list
     */
    render() {
        return (
            <ul className={style.list}>
                {this.getItems().map((item, idx) =>
                    <TodoItem key={item.get('id')}
                        id={item.get('id')}
                        text={item.get('text')}
                        isCompleted={this.isCompleted(item)}
                        isEditing={item.get('editing')}
                        doneEditing={this.props.doneEditing}
                        cancelEditing={this.props.cancelEditing}
                        toggleComplete={this.props.toggleComplete}
                        deleteItem={this.props.deleteItem}
                        editItem={this.props.editItem}
                    />
                )}
            </ul>
        )
    }
};