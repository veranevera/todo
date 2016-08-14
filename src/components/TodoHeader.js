import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import TextInput from './ui/TextInput';

export default class TodoHeader extends React.Component {
    /**
     * @constructor
     * @param {object} props - available after call function super()
     */
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    /**
     * Render component TodoHeader
     * @return {JSX} - Output header
     */
    render() {
        return (
            <header className="header">
                <h1>Список дел</h1>
                <TextInput classes="newTodo"
                    ref="addTodoInput"
                    autoComplete="off"
                    placeholder="Что бы Вы хотели сделать?"  />
            </header>
        )
    }
};