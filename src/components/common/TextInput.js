/**
 * TextInput.js
 * created 2017.08.08
 * written by LeeHyungGeun
 * 
 * text input
 */

import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ id, name, value, placeholder, onChange, readonly, disabled }) => (
    <input
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readonly}
        disabled={disabled}
    />
);
TextInput.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    readonly: PropTypes.bool,
    disabled: PropTypes.bool
};
export default TextInput;