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
    }
    componentDidMount () {
        console.log('*******componentDidMount********');
    }
    componentDidUpdate() {
        console.log('*******componentDidUpdate********');
    }
    render() {
        const title = this.props.title;
        return(
            <div>
                <textarea name="title" rows="3" cols="102" placeholder="please enter value" value={title} />
            </div>
        );
    }
}
TextareaComponent.propTypes = propTypes;
TextareaComponent.defaultProps = defaultProps;
export default TextareaComponent;