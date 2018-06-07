import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    datas: React.PropTypes.array.isRequired
};

const AddList = ({datas}) => {
    return (
        <ul>
           {
                datas ?  datas.map((item, index) => {
                    return <li key={index}>{item}</li>;
                }):''
            }
        </ul>
    );
};
AddList.propTypes = propTypes;
export default AddList;