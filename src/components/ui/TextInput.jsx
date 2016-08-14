import React from 'react';
import classnames from 'classnames';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import style from './TextInput.styl'

export default class TextInput extends React.Component {
    /**
     * @constructor
     * @param {object} props - available after call function super()
     */
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    /**
     * Render component TextInput
     * @return {JSX} - Output input
     */
    render() {
        const {classes, ...props} = this.props;
    
        let cls = {};

        cls[style.input] = true;

        if(classes) {
            cls[classes] = classes;
        }

        return <input className={classnames(cls)} {...props} />
    }
};