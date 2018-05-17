import React from 'react';
import PropTypes from 'prop-types';

const InputArea = ({ text , textChange, onSubmit }) => {
    return (
        <div>
            <input  value={text} onChange={textChange}/>
            <button  onSubmit={() => { onSubmit(text) }}>add</button>
        </div>
    );
};
InputArea.propTypes = {
    onSubmit: React.PropTypes.func.isRequired
};
export default InputArea;