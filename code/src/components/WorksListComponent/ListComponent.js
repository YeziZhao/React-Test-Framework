import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { 
    MESSAGES as M
 } from '../../services';
 import MsgContent from './MsgContentComponent';
import { ListStyle as Style } from '../../styles/list';
import {
    SelectInput
} from '../common';


const propTypes = {
    totalCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    pageSizes: PropTypes.arrayOf(PropTypes.object).isRequired,
    handChangePageSize: PropTypes.func.isRequired,
    messages: PropTypes.arrayOf(PropTypes.object).isRequired
};

const Messages = ({ 
    totalCount,
    pageSize,
    pageSizes,
    handChangePageSize,
    messages
 }) => {
     let no = 100;
    return (
        <div className={Style.istBox}>
            <div className={Style.totalCount}>
            <span>{M.LIST_COUNT_TOTAL}<b>{totalCount}</b>{M.LIST_COUNT_LENGTH}</span>
            <SelectInput
                className={Style.pageSize}
                name="pageSize"
                value={pageSize}
                options={pageSizes}
                onChange={handChangePageSize}
            />
            </div>
            <table className={Style.table}>
                <thead>
                    <tr>
                        <th className={Style.number}>NO.</th>
                        <th className={Style.title}>title</th>
                        <th className={Style.productType}>{M.LIST_PRODUCT}</th>
                        <th className={Style.idcType}>{M.LIST_IDCTYPE}</th>
                        <th className={Style.acceptorLevel}>{M.LIST_RANGE}</th>
                        <th className={Style.notiTime}>{M.LIST_SEND_DATE}</th>
                        <th className={Style.mbrId}>{M.LIST_HANDLER}</th>
                        <th className={Style.preview}>{M.LIST_PREVIEW}</th>
                        <th className={Style.sendStatus}>{M.LIST_SEND_COUNT}</th>
                        <th className={Style.handle}>{M.LIST_SEND_STATUS}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        messages.map((message, key) => {
                            return (
                                <MsgContent message={message} no={no--} key={key} />
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
       
    );
};
Messages.propTypes = propTypes;
export default Messages;