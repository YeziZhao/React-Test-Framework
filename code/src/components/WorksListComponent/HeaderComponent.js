import React from 'react';
import PropTypes from 'prop-types';
import { MESSAGES as M } from '../../services';
import { ListStyle as Style } from '../../styles/list';
const Header = () => {
    return (
       <div className={Style.tab}><span className={Style.title}>{M.LIST_SEND_SUCCESS}</span></div>
    );
};
export default Header;