import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classnames from 'classnames';

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
        let itemCls = {};
        itemCls[style.item] = true;
        itemCls[style.completed] = this.props.isCompleted;
        itemCls[style.editing] = this.props.isEditing;

        let editInputCls = {};
        editInputCls[style.edit] = true;
        editInputCls['hidden'] = !this.props.isEditing;

        return (
            <li className={classnames(itemCls)}>
                <div className={style.view}>
                    <input type="checkbox"
                        className={style.checkbox}
                        defaultChecked={this.props.isCompleted}
                        onClick={() => this.props.toggleComplete(this.props.id)} />
                    <label className={style.label} ref="text"
                        onDoubleClick={() => this.props.editItem(this.props.id)}>
                        {this.props.text}
                    </label>
                    <button className={style.destroy} onClick={() => this.props.deleteItem(this.props.id)}></button>
                </div>
                <TextInput
                    classes={classnames(editInputCls)}
                    text={this.props.text}
                    itemId={this.props.id}
                    cancelEditing={this.props.cancelEditing}
                    doneEditing={this.props.doneEditing} />
            </li>
        )
    }
};