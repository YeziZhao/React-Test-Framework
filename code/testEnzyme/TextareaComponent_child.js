import React from 'react';
import PropTypes from 'prop-types';
import ChildTextareaComponent from './TextareaComponent_nochild';
const propTypes = {
    title: PropTypes.string,
};

const defaultProps = {
    title: '',
};

function TextareaComponent({ title }) {
    return(
        <div>
            <div id='idChild' className='cssChild' data-name="haveChild">
                <div>{title}</div>
                <ChildTextareaComponent title='childTitle'/>
            </div>
        </div>
    );
}
TextareaComponent.propTypes = propTypes;
TextareaComponent.defaultProps = defaultProps;
export default TextareaComponent;