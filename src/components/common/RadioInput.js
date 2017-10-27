/**
 * RadioInput.js
 * created 2017.08.08
 * written by LeeHyungGeun
 * 
 * radio input
 */

import React from 'react';
import PropTypes from 'prop-types';

const RadioInput = ({ id, name, label, defaultValue, value, onChange, readonly, disabled }) => {
    return (
        <div>
            <input
                type="radio"
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                checked={defaultValue === value ? true : false}
                readOnly={readonly}
                disabled={disabled}
            />
            {
                id ?
                <label htmlFor={id}>{label}</label> :
                <label>{label}</label>
            }
        </div>
    );
};
RadioInput.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired,
    onChange: PropTypes.func.isRequired,
    readonly: PropTypes.bool,
    disabled: PropTypes.bool
};
export default RadioInput;