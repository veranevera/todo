import React from 'react';

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
    }
    /**
     * Render component TodoApp
     * @return {JSX} - Add markup and output data
     */
    render() {
        return (
            <ul>
                {this.state.todos.map((item, idx) =>
                    <li key={idx}>
                        <div>
                            <input type="checkbox" id={`todo_${idx}`} />
                            <label htmlFor={`todo_${idx}`}>

                            {item.get('text')}
                            </label>
                        </div>
                    </li>
                )}
            </ul>
        )
    }
};