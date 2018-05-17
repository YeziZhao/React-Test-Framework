import React from 'react';
import PropTypes from 'prop-types';

const AddList = ({datas}) => {
    return (
        <ul>
           {
                datas ?  datas.map((item, index) => {
                    return <li>{item}</li>
                }):''
            }
        </ul>
    );
};
AddList.propTypes = {
    datas: React.PropTypes.array.isRequired
};
export default AddList;