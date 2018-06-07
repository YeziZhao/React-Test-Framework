import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    text: React.PropTypes.string.isRequired,
    textChange:  React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired
};

const InputArea = ({ text , textChange, onSubmit }) => {
    return (
        <div>
            <input  value={text} onChange={textChange}/>
            <button  onSubmit={() => { onSubmit(text); }}>add</button>
        </div>
    );
};
InputArea.propTypes = propTypes;
export default InputArea;