import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    title: PropTypes.string,
};

const defaultProps = {
    title: '',
};

class TextareaComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'foo' };
    }
    componentDidMount () {
        console.log('*******componentDidMount********');
    }
    componentDidUpdate() {
        console.log('*******componentDidUpdate********');
    }
    render() {
        const { title } = this.props;
        const { name } = this.state;
        return(
            <div>
                <textarea value={title}></textarea>
                <span>{name}</span>
            </div>
        );
    }
}
TextareaComponent.propTypes = propTypes;
TextareaComponent.defaultProps = defaultProps;
export default TextareaComponent;