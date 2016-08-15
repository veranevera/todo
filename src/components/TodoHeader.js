import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import TextInput from './ui/TextInput';

import style from './TodoHeader.styl';

export default class TodoHeader extends React.Component {
    /**
     * @constructor
     * @param {object} props - available after call function super()
     */
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    _handleKeyPress(e) {
        if (e.key === 'Enter' && this.refs.addTodoInput.value !== '') {
            const itemText = this.refs.addTodoInput.value;
            this.refs.addTodoInput.value = '';
            return this.props.addItem(itemText);
        }
    }
    /**
     * Render component TodoHeader
     * @return {JSX} - Output header
     */
    render() {
        return (
            <header className="header">
                <h1>Список дел</h1>
                <input className={style.input}
                    ref="addTodoInput"
                    autoComplete="off"
                    placeholder="Что бы Вы хотели сделать?"
                    onKeyPress={this._handleKeyPress.bind(this)} />
            </header>
        )
    }
};