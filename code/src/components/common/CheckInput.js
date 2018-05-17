/**
 * CheckInput.js
 * created 2017.08.08
 * written by LeeHyungGeun
 * 
 * check input
 */

import React from 'react';
import PropTypes from 'prop-types';

const CheckInput = ({ id, name, label, value, checked, onChange, readonly, disabled }) => {
    return (
        <div>
            <input 
                type="checkbox"
                id={id}
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
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
CheckInput.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    readonly: PropTypes.bool,
    disabled: PropTypes.bool
};
export default CheckInput;