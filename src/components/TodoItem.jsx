import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import TextInput from './ui/TextInput';

import style from './TodoItem.styl';

export default class TodoItem extends React.Component {
    /**
     * @constructor
     * @param {object} props - available after call function super()
     */
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    /**
     * Render component TodoItem
     * @return {JSX} - Output item
     */
    render() {
        return (
            <li className={style.item}>
                <div className={style.view}>
                    <input type="checkbox"
                        className={style.checkbox} id={this.props.id} />
                    <label className={style.label} htmlFor={this.props.id}>
                        {this.props.text}
                    </label>
                    <button className={style.destroy}></button>
                </div>
                <TextInput classes="edit hidden" type="text" autoFocus={true} />
            </li>
        )
    }
};