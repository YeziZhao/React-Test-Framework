import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { 
    MESSAGES as M,
    utils,
    convert
 } from '../../services';
import { ListStyle as Style } from '../../styles/list';
import {
    SelectInput
} from '../common';


const propTypes = {
    message: PropTypes.object.isRequired,
    no: PropTypes.number.isRequired,
    openPreview: PropTypes.func,
    openResendHistory: PropTypes.func,
    openReceiveHistory: PropTypes.func,
    resend: PropTypes.func,
};

const MsgContent = ({ 
    message,
    no,
    openPreview,
    openResendHistory,
    openReceiveHistory,
    resend
 }) => {
    const {   
            title, 
            productTypes, 
            idcType, 
            acceptorLevel, 
            notiTime, 
            mbrId, 
            sendStatus,
            isResend, 
            id, 
            failedCode,
            totalNum, 
            successNum 
        } = message;
    return (
        <tr>
            <td>{no > 0 ? no : null}</td>
            <td>{title}</td>
            <td>
                {
                     productTypes.map((productType, key) => {
                        return (
                            <p key={key}>{productType}</p>
                        );
                    })
                }
            </td>
            <td> {idcType}</td>
            <td>
                {
                    acceptorLevel === 'ADMIN' ? M.COMPOSE_SENDINFOSETTING_ADMIN :
                    acceptorLevel === 'ALL' ? `${M.COMPOSE_SENDINFOSETTING_ALL} ${M.COMPOSE_SENDINFOSETTING_ALL_DETAIL}` : null
                }
            </td>
            <td>
                {           
                    utils.timezone(notiTime, idcType === 'kr' ? 'Asia/Seoul' : 'Asia/Tokyo').format('YYYY.MM.DD HH:mm')
                }
            </td>
            <td>{mbrId}</td>
           
            <td><span className={Style.previewButton} onClick={openPreview} >{M.LIST_PREVIEW}</span></td>
            <td>
                {
                    sendStatus === 'NOT_SEND' ? '-' : null
                }
                {
                    sendStatus === 'RE_SEND_PREPARED' || sendStatus === 'RE_SEND' ? '-' : null
                }
                {
                    sendStatus === 'SEND_ON' ? '-' : null
                }
                {
                    sendStatus === 'CALL_API_FAILED' ?
                    <div><p className={Style.amount}>{M.LIST_SEND_FAILED_API}</p></div> :
                    null  
                }
                {
                    sendStatus === 'SEND_FAILED' ?
                    <div><p className={Style.amount}>{M.LIST_SEND_FAILED_DB}</p></div> :
                    null  
                }
                {/*{
                        sendStatus === 'SEND_FAILED' && failedCode === 'DOMAIN_CATCH_FAIL' ?
                        <div><p className={Style.amount}>{M.LIST_SEND_FAILED_DOMAIN_CATCH}</p></div> :
                        null
                    }
                    {
                        sendStatus === 'SEND_FAILED' && failedCode === 'USER_CATCH_FAIL' ? 
                        <div><p className={Style.amount}>{M.LIST_SEND_FAILED_USER_CATCH}</p></div> :
                        null
                    }*/}
                    {/* Total, Success, Fail, History, Resend */}
                    {/*sendStatus === 'SEND_FAILED' && failedCode === 'SEND_FAIL' ||*/}
                {
                    sendStatus === 'SEND_COMPLETE' ?
                    <div>
                        <p className={Style.amount}>
                            {M.LIST_TOTAL_SEND_COUNT} : { totalNum > 0 ? totalNum : 0 } {/* Total Count */}
                            {
                                // Resend History
                                isResend === 'Y' ? 
                                <span className={Style.preview} onClick={openResendHistory}>
                                    {M.LIST_SEND_HISTORY}
                                </span> :
                                null
                            }
                        </p>
                        <p className={Style.amount}>
                            {/* Success User List */}
                            {M.LIST_SUCCESS_COUNT} : {successNum}
                            <span className={Style.successHistory} onClick={() => {openReceiveHistory(true); }}>{M.LIST_SEND_SUCCESS_LIST}</span>
                        </p>
                        <p className={Style.amount}>
                            {/* Fail User List */}
                            {M.LIST_FAIL_COUNT}  : {totalNum - successNum > 0 ? totalNum - successNum : 0}
                            <span className={Style.failedHistory} onClick={() => {openReceiveHistory(false); }}>{M.LIST_SEND_FAIL_LIST}</span>
                            { totalNum - successNum > 0 && sendStatus !== 'SEND_ON' ? <span className={Style.resendButton} onClick={resend}>▶{M.LIST_RETRY}</span> : null }
                        </p>
                    </div> 
                    :
                    null
                }
                </td>
           

        </tr>
       
    );
};
MsgContent.propTypes = propTypes;
export default MsgContent;

// {/* Number of sending */}